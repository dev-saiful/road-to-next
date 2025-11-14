import { prisma } from "@/lib/prisma";

import { ParsedSearchParams } from "../search-params";

export const getTickets = async (
  userId: string | undefined,
  searchParams: ParsedSearchParams
) => {
  const where = {
    userId,
    title: {
      contains: (await searchParams).search,
      mode: "insensitive" as const,
    },
  };

  const skip = (await searchParams).page * (await searchParams).size;
  const take = (await searchParams).size;

  const [tickets, count] = await prisma.$transaction([
    prisma.ticket.findMany({
      where,
      skip,
      take,
      orderBy: {
        [(await searchParams).sortKey]: (await searchParams).sortValue,
      },
      include: { user: { select: { username: true } } },
    }),
    prisma.ticket.count({ where }),
  ]);

  return {
    list: tickets,
    metadata: {
      count,
      hasNextPage: count > skip + take,
    },
  };
};
