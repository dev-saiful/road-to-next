import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tickets: Prisma.TicketCreateInput[] = [
  {
    title: "Ticket 1",
    description:
      "Description for Ticket 1 lorem ipsum dolor sit amet. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    status: "DONE" as const,
  },
  {
    title: "Ticket 2",
    description:
      "Description for Ticket 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    description:
      "Description for Ticket 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
