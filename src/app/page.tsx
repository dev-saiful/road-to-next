
import { Suspense } from "react";
import { Heading } from "@/components/heading";
import Spinner from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";

const Home = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home Page" description="All Tickets in one place" />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default Home;
