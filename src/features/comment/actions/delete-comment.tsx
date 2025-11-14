"use server";

import { revalidatePath } from "next/cache";

import {
  formErrorToActionState,
  toFormActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import { prisma } from "@/lib/prisma";
import { ticketPath } from "@/paths";

const deleteComment = async (id: string) => {
  const { user } = await getAuthOrRedirect();
  const comment = await prisma.comment.findUnique({
    where: { id },
  });
  if (!comment || !isOwner(user, comment)) {
    return toFormActionState("ERROR", "Not authorized to delete this comment");
  }
  try {
    await prisma.comment.delete({
      where: { id },
    });
  } catch (error) {
    return formErrorToActionState(error);
  }
  revalidatePath(ticketPath(comment.ticketId));
  return toFormActionState("SUCCESS", "Comment deleted successfully");
};
export { deleteComment };
