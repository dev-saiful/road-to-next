import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type PageAndSize = {
  page: number;
  size: number;
};
type PaginationProps = {
  pagination: PageAndSize;
  onPagination: (pagination: PageAndSize) => void;
  paginatedTicketMetadata: {
    count: number;
    hasNextPage: boolean;
  };
};

const Pagination = ({
  pagination,
  onPagination,
  paginatedTicketMetadata: { count, hasNextPage },
}: PaginationProps) => {
  const startOffset = pagination.page * pagination.size + 1;
  const endOffset = startOffset - 1 + pagination.size;
  const actualEndOffset = Math.min(endOffset, count);
  const label = `${startOffset} - ${actualEndOffset} of ${count}`;

  const handlePrevPage = () => {
    onPagination({ ...pagination, page: pagination.page - 1 });
  };
  const handleNextPage = () => {
    onPagination({ ...pagination, page: pagination.page + 1 });
  };

  const handleSizeChange = (size: string) => {
    onPagination({ page: 0, size: parseInt(size) });
  };
  const prevBtn = (
    <Button
      variant="outline"
      size="sm"
      disabled={pagination.page < 1}
      onClick={handlePrevPage}
    >
      Previous
    </Button>
  );
  const nextBtn = (
    <Button
      variant="outline"
      size="sm"
      disabled={!hasNextPage}
      onClick={handleNextPage}
    >
      Next
    </Button>
  );

  const sizeBtn = (
    <Select
      defaultValue={pagination.size.toString()}
      onValueChange={handleSizeChange}
    >
      <SelectTrigger className="h-[36px]">
        <SelectValue />
        <SelectContent>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectContent>
      </SelectTrigger>
    </Select>
  );

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="flex gap-x-2">
        {sizeBtn}
        {prevBtn}
        {nextBtn}
      </div>
    </div>
  );
};

export { Pagination };
