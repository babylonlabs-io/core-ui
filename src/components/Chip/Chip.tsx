import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Chip({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={twMerge(
        "inline-flex items-center justify-center rounded-full bg-primary-contrast px-2.5 py-1 text-[0.5rem] leading-4 tracking-0.4 text-primary-light",
        className,
      )}
    />
  );
}
