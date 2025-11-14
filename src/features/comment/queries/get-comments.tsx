import { prisma } from "@/lib/prisma";

const getComments = async (ticketId: string) => {
  return await prisma.comment.findMany({
    where: { ticketId },
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};

export { getComments };
