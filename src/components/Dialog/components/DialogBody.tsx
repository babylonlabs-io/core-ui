import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const DialogBody = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div {...props} className={twMerge("custom-scrollbar min-h-0 flex-1 overflow-y-auto", props.className)} />
);
