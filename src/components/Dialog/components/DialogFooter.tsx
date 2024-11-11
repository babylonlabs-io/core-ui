import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const DialogFooter = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div {...props} className={twMerge("shrink-0", props.className)} />
);
