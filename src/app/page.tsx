import Link from "next/link";
import { Heading } from "@/components/heading";
import { ticketsPath } from "@/paths";

const Home = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home Page" description="Your home place to start" />
      <div className="flex-1 flex flex-col items-center">
        <Link className="underline" href={ticketsPath()}>
          View Tickets
        </Link>
      </div>
    </div>
  );
};

export default Home;
