"use server";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {
  formErrorToActionState,
  toFormActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const updateTicketStatus = async (
  ticketId: string,
  status: TicketStatus
) => {
  const { user } = await getAuthOrRedirect();
  try {
    if (ticketId) {
      const ticket = await prisma.ticket.findUnique({
        where: { id: ticketId },
      });

      if (!ticket || !isOwner(user, ticket)) {
        return toFormActionState("ERROR", "Not authorized to edit this ticket");
      }
    }
    await prisma.ticket.update({
      where: { id: ticketId },
      data: { status },
    });
  } catch (error) {
    return formErrorToActionState(error);
  }
  revalidatePath(ticketsPath());
  return toFormActionState("SUCCESS", "Ticket status updated successfully");
};
