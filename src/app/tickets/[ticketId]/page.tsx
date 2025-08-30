import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);
  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button variant="outline">
            <Link href={ticketsPath()}>Go back</Link>
          </Button>
        }
      />
    );
  }
  return (
    <div>
      <h2>{ticket?.title}</h2>
      <p>{ticket?.description}</p>
    </div>
  );
};

export default TicketPage;
