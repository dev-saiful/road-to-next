import { useEffect, useRef } from "react";
import { ActionState } from "../utils/to-action-state";

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess?: (OnArgs: OnArgs) => void;
  onError: (OnArgs: OnArgs) => void;
};

const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions
) => {
  const prevTimestamp = useRef(actionState.timestamp);
  const isUpdated = prevTimestamp.current !== actionState.timestamp;
  useEffect(() => {
    if (!isUpdated) return;
    if (actionState.status === "SUCCESS") {
      // Handle success

      options.onSuccess?.({ actionState });
    }
    if (actionState.status === "ERROR") {
      // Handle error case
      options.onError?.({ actionState });
    }
    prevTimestamp.current = actionState.timestamp;
  }, [isUpdated, actionState, options]);
  return [];
};

export { useActionFeedback };
