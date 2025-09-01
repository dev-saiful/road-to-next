import { LucideLoader } from "lucide-react";

const Spinner = () => {
  return (
    <LucideLoader className="h-16 w-16 animate-spin flex flex-1 flex-col items-center justify-center self-center" />
  );
};

export default Spinner;
