import { HTMLProps, createElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const STYLES = {
  body1: "text-base tracking-0.15",
  body2: "text-sm tracking-0.15",
  subtitle1: "text-base leading-7 tracking-0.15",
  subtitle2: "text-sm font-bold leading-normal tracking-0.1",
  overline: "text-xs leading-8 tracking-1 uppercase",
  caption: "text-xs tracking-0.4",
} as const;

type Variant = keyof typeof STYLES;

export interface TextProps extends HTMLProps<HTMLElement> {
  variant: Variant;
  as?: string;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ variant, as = "p", children, className, ...restProps }, ref) => {
    return createElement(
      as,
      {
        ...restProps,
        ref,
        className: twMerge(STYLES[variant], className),
      },
      children,
    );
  },
);

Text.displayName = "Text";
