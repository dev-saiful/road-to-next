"use server";

import { revalidatePath } from "next/cache";
import z from "zod";

import {
  ActionState,
  formErrorToActionState,
  toFormActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { prisma } from "@/lib/prisma";
import { ticketPath } from "@/paths";

const commentSchema = z.object({
  content: z
    .string()
    .min(1, "Content is required")
    .max(1024, "Content is too long"),
});

const createComment = async (
  ticketId: string,
  _actionState: ActionState,
  formData: FormData
) => {
  const { user } = await getAuthOrRedirect();
  try {
    const data = commentSchema.parse(Object.fromEntries(formData));
    await prisma.comment.create({
      data: {
        ...data,
        ticketId,
        userId: user.id,
      },
    });
  } catch (error) {
    return formErrorToActionState(error);
  }

  revalidatePath(ticketPath(ticketId));

  return toFormActionState("SUCCESS", "Comment created successfully");
};
export { createComment };
