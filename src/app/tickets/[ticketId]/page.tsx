import { notFound } from "next/navigation";
import { getTicket } from "@/features/queries/get-ticket";
import { TicketItem } from "@/features/ticket/components/ticket-item";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket(params.ticketId);
  if (!ticket) {
    notFound();
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetails />
    </div>
  );
};

export default TicketPage;
