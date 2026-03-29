import type { MouseEvent } from "react";

export const scrollToForm = (event?: MouseEvent<HTMLElement>) => {
  event?.preventDefault();

  const formSection = document.getElementById("form");
  if (!formSection) return;

  formSection.scrollIntoView({ behavior: "smooth", block: "start" });
};