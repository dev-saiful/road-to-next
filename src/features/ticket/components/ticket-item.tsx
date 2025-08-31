import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { TICKETS_ICON } from "../constants";
import { Ticket } from "../types";

type TicketItemProps = {
  ticket: Ticket;
  isDetails?: boolean;
};

const TicketItem = ({ ticket, isDetails }: TicketItemProps) => {
  const detailsButton = (
    <Button variant="outline" size="icon" asChild>
      <Link className="text-sm underline" href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetails,
        "max-w-[420px]": !isDetails,
      })}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKETS_ICON[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3 ": !isDetails,
            })}
          >
            {ticket.description}
          </span>
        </CardContent>
      </Card>
      {isDetails ? null : (
        <div className="flex flex-col gap-y-1">{detailsButton}</div>
      )}
    </div>
  );
};

export { TicketItem };
