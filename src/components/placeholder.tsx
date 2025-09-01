import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement, ReactElement } from "react";

type PlaceholderProps = {
  label: string;
  button?: ReactElement;
  icon?: ReactElement;
};
const Placeholder = ({
  label,
  button = <div />,
  icon = <LucideMessageSquareWarning />,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-1 self-center flex-col items-center justify-center gap-y-2">
      {cloneElement(icon as ReactElement<{ className?: string }>, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>

      {cloneElement(button as ReactElement<{ className?: string }>, {
        className: "h-10",
      })}
    </div>
  );
};

export { Placeholder };
