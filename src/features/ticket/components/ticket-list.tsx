import { Placeholder } from "@/components/placeholder";
import { TicketPagination } from "@/features/ticket/components/ticket-pagination";
import { getTickets } from "@/features/ticket/queries/get-tickets";
import { ParsedSearchParams } from "../search-params";
import { TicketItem } from "./ticket-item";
import { TicketSearchInput } from "./ticket-search-input";
import { TicketSort } from "./ticket-sort";

type TicketListProps = {
  userId?: string;
  searchParams: ParsedSearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const { list: tickets, metadata:ticketMetadata } = await getTickets(userId, searchParams);
  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      <div className="w-full max-w-[420px] flex gap-x-2">
        <TicketSearchInput placeholder="Search tickets..." />
        <TicketSort
          options={[
            { sortKey: "createdAt", sortValue: "desc", label: "Newest" },
            { sortKey: "bounty", sortValue: "desc", label: "Bounty" },
          ]}
        />
      </div>
      {tickets.length ? (
        tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)
      ) : (
        <Placeholder label="No tickets found" />
      )}
      <div className="w-full max-w-[420px]">
        <TicketPagination paginatedTicketMetadata={ticketMetadata} />
      </div>
    </div>
  );
};

export { TicketList };
