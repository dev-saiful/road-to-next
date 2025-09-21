import { Prisma, PrismaClient } from "@prisma/client";
import { hash } from "argon2";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    email: "user1@example.com",
    username: "user1",
    passwordHash: "hashed_password_1",
  },
  {
    email: "user2@example.com",
    username: "user2",
    passwordHash: "hashed_password_2",
  },
  {
    email: "user3@example.com",
    username: "user3",
    passwordHash: "hashed_password_3",
  },
];

const seed = async () => {
  // Clear existing data
  await prisma.ticket.deleteMany();
  await prisma.user.deleteMany();

  // Hash password
  const passwordHash = await hash("password123");

  // Create users and get their IDs
  const createdUsers = await Promise.all(
    users.map((user) =>
      prisma.user.create({
        data: {
          ...user,
          passwordHash,
        },
      })
    )
  );

  // Create tickets with proper user references
  const tickets = [
    {
      title: "Ticket 1",
      description:
        "Description for Ticket 1 lorem ipsum dolor sit amet. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      status: "DONE" as const,
      deadline: "2023-12-31",
      bounty: 100,
      userId: createdUsers[0].id,
    },
    {
      title: "Ticket 2",
      description:
        "Description for Ticket 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "OPEN" as const,
      deadline: "2023-12-31",
      bounty: 200,
      userId: createdUsers[1].id,
    },
    {
      title: "Ticket 3",
      description:
        "Description for Ticket 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "IN_PROGRESS" as const,
      deadline: "2023-12-31",
      bounty: 300,
      userId: createdUsers[2].id,
    },
  ];

  await prisma.ticket.createMany({
    data: tickets,
  });

  console.log("Seed completed successfully!");
};

seed()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
