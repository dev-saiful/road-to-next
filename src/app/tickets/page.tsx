import Link from "next/link";
import { Heading } from "@/components/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKETS_ICON = {
  DONE: "✅",
  OPEN: "🟡",
  IN_PROGRESS: "🔄",
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets List"
        description="All your tickets at one place"
      />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TICKETS_ICON[ticket.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.description}
              </span>
            </CardContent>
            <CardFooter>
              <Link className="text-sm underline" href={ticketPath(ticket.id)}>
                View Details
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
