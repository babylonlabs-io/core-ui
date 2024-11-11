import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface BackdropProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
}

export const Backdrop = ({ open = false, ...props }: BackdropProps) => (
  <div
    {...props}
    className={twMerge(
      "fixed inset-0 z-40 flex items-center justify-center bg-primary/50 transition-opacity duration-500",
      open ? "animate-backdrop-in" : "animate-backdrop-out",
      props.className,
    )}
  />
);
