"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { setCookieByKey } from "@/actions/cookies";
import {
  ActionState,
  formErrorToActionState,
  toFormActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";
import { toCent } from "@/utils/currency";

const upsertTicketSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(100),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(1024),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Deadline is required",
  }),
  bounty: z.coerce
    .number()
    .positive()
    .min(1, { message: "Bounty must be a positive number" }),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData
) => {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      description: formData.get("description"),
      deadline: formData.get("deadline"),
      bounty: formData.get("bounty"),
    });

    const dbData = {
      ...data,
      bounty: toCent(data.bounty),
    };

    await prisma.ticket.upsert({
      where: {
        id: id || "",
      },
      create: dbData,
      update: dbData,
    });
  } catch (error) {
    return formErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());
  if (id) {
    await setCookieByKey("toast", "Ticket updated successfully");
    redirect(ticketPath(id));
  }
  return toFormActionState("SUCCESS", "Ticket created successfully");
};
