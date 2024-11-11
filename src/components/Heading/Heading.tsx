import { createElement, forwardRef, type HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const STYLES = {
  h1: "text-8xl leading-[7rem]",
  h2: "text-6xl leading-[4.5rem]",
  h3: "text-5xl leading-[3.5rem]",
  h4: "text-[2.125rem] leading-[2.625rem] tracking-0.25",
  h5: "text-2xl",
  h6: "text-xl leading-8 tracking-0.15",
} as const;

type HeadingVariant = keyof typeof STYLES;

export interface HeadingProps extends HTMLProps<HTMLElement> {
  variant: HeadingVariant;
  as?: string;
}

export const Heading = forwardRef<HTMLElement, HeadingProps>(
  ({ variant, as = variant, children, className, ...restProps }, ref) =>
    createElement(
      as,
      {
        ...restProps,
        ref,
        className: twMerge(STYLES[variant], className),
      },
      children,
    ),
);

Heading.displayName = "Heading";
