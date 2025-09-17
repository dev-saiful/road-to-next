import { z, ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timestamp: Date.now(),
};

export const formErrorToActionState = (
  error: unknown,
  formData?: FormData
): ActionState => {
  if (error instanceof ZodError) {
    //    zod validation error
    return {
      status: "ERROR",
      message: "",
      payload: formData,
      fieldErrors: z.flattenError(error).fieldErrors,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    // others  error like database errors
    return {
      status: "ERROR",
      message: error.message,
      payload: formData,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } else {
    // unknown error
    return {
      status: "ERROR",
      message: "Something went wrong",
      payload: formData,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  }
};

export const toFormActionState = (
  status: ActionState["status"],
  message: string,
  formData?: FormData
): ActionState => {
  return {
    status,
    message,
    payload: formData,
    fieldErrors: {},
    timestamp: Date.now(),
  };
};
