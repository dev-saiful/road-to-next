import { Suspense } from "react";

import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/heading";
import Spinner from "@/components/spinner";
import { getAuth } from "@/features/auth/queries/get-auth";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import {
  ParsedSearchParams,
  searchParamsCache,
} from "@/features/ticket/search-params";

const TicketsPage = async ({
  searchParams,
}: {
  searchParams: ParsedSearchParams;
}) => {
  const { user } = await getAuth();
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets List" description="All my tickets at one place" />
      <CardCompact
        title="Create a New Ticket"
        description="A new ticket will be created"
        className="w-full max-w-[420px] self-center"
        content={<TicketUpsertForm />}
      />
      <Suspense fallback={<Spinner />}>
        <TicketList
          userId={user?.id}
          searchParams={searchParamsCache.parse(searchParams)}
        />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
