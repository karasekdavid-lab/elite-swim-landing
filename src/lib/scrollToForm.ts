import type { MouseEvent } from "react";

export const scrollToForm = (event?: MouseEvent<HTMLElement>) => {
  event?.preventDefault();

  const formSection = document.getElementById("form");
  if (!formSection) return;

  const targetTop = formSection.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(0, targetTop - 12),
    behavior: "smooth",
  });

  requestAnimationFrame(() => {
    formSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
};