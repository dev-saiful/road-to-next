"use client";
import { Ticket } from "@prisma/client";
import clsx from "clsx";
import {
  LucideMoreVertical,
  LucidePencil,
  LucideSquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketEditPath, ticketPath } from "@/paths";
import { toCurrencyFromCent } from "@/utils/currency";
import { TICKETS_ICON } from "../constants";
import { TicketMoreMenu } from "./ticket-more-menu";

type TicketItemProps = {
  ticket: Ticket;
  isDetails?: boolean;
};

const TicketItem = ({ ticket, isDetails }: TicketItemProps) => {
  const detailsButton = (
    <Button variant="outline" size="icon" asChild>
      <Link className="text-sm underline" prefetch href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );
  const editButton = (
    <Button variant="outline" size="icon" asChild>
      <Link
        className="text-sm underline"
        prefetch
        href={ticketEditPath(ticket.id)}
      >
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  );

  const moreMenu = (
    <TicketMoreMenu
      ticket={ticket}
      trigger={
        <Button variant="outline" size="icon">
          <LucideMoreVertical className="h-4 w-4" />
        </Button>
      }
    />
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
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">{ticket.deadline}</p>
          <p className="text-sm text-muted-foreground">
            {toCurrencyFromCent(ticket.bounty)}
          </p>
        </CardFooter>
      </Card>
      {isDetails ? (
        <div className="flex flex-col gap-y-1">
          {editButton}

          {moreMenu}
        </div>
      ) : (
        <div className="flex flex-col gap-y-1">
          {detailsButton}
          {editButton}
        </div>
      )}
    </div>
  );
};

export { TicketItem };
