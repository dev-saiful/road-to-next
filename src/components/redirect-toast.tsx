"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";

const RedirectToast = () => {
  const pathName = usePathname();
  useEffect(() => {
    const showToast = async () => {
      const message = await getCookieByKey("toast");
      console.log(message);
      if (message) {
        toast.success(message);
        deleteCookieByKey("toast");
      }
    };
    showToast();
  }, [pathName]);

  return null;
};

export { RedirectToast };
