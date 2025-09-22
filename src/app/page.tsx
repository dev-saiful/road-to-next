import { Suspense } from "react";
import { Heading } from "@/components/heading";
import Spinner from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import {
  ParsedSearchParams,
  searchParamsCache,
} from "@/features/ticket/search-params";

type HomePageProps = {
  searchParams: ParsedSearchParams;
};

const Home = ({ searchParams }: HomePageProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home Page" description="All Tickets in one place" />

      <Suspense fallback={<Spinner />}>
        <TicketList searchParams={searchParamsCache.parse(searchParams)} />
      </Suspense>
    </div>
  );
};

export default Home;
