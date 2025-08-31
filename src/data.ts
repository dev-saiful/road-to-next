export const initialTickets = [
  {
    id: "1",
    title: "Ticket 1",
    description:
      "Description for Ticket 1 lorem ipsum dolor sit amet. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    status: "DONE" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    description:
      "Description for Ticket 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "OPEN" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    description:
      "Description for Ticket 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "IN_PROGRESS" as const,
  },
];
