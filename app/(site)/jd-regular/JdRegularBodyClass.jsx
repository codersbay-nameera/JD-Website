"use client";

import { useEffect } from "react";

export function JdRegularBodyClass() {
  useEffect(() => {
    document.body.classList.add("jd-regular-page");

    return () => {
      document.body.classList.remove("jd-regular-page");
    };
  }, []);

  return null;
}
