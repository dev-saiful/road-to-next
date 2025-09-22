"use client";
import { useQueryStates } from "nuqs";
import { Sort, SortOption } from "@/components/sort";
import { sortOptions, sortParser } from "@/features/ticket/search-params";

type TicketSortProps = {
  options: SortOption[];
};
const TicketSort = ({ options }: TicketSortProps) => {
  const [sort, setSort] = useQueryStates(sortParser, sortOptions);
  return <Sort options={options} value={sort} onChange={setSort} />;
};
export { TicketSort };
