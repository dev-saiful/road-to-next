"use server";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {
  formErrorToActionState,
  toFormActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const updateTicketStatus = async (
  ticketId: string,
  status: TicketStatus
) => {
  try {
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
