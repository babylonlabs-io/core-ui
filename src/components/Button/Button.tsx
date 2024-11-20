import { type DetailedHTMLProps, type HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const STYLES = {
  contained: {
    primary: "bg-primary-light text-secondary-contrast hover:bg-primary-main disabled:bg-primary/12",
    secondary: "bg-secondary-main text-secondary-contrast hover:bg-secondary-dark disabled:bg-primary/12",
  },
  outlined: {
    primary: "border border-primary-light text-primary-main hover:border-primary hover:bg-primary/10",
    secondary:
      "border border-secondary-main text-secondary-main hover:border-secondary-light hover:bg-secondary-light/10",
  },
} as const;

const SIZES = {
  large: "h-10 px-6 text-base tracking-0.5",
  medium: "h-9 px-4 text-sm tracking-0.5",
  small: "h-8 px-2.5 text-xs tracking-0.5",
} as const;

export interface ButtonProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "size"> {
  className?: string;
  disabled?: boolean;
  fluid?: boolean;
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "contained", size = "large", color = "primary", fluid = false, className, disabled, ...restProps },
    ref,
  ) => {
    return (
      <button
        {...restProps}
        disabled={disabled}
        ref={ref}
        className={twMerge(
          fluid ? "w-full" : "",
          STYLES[variant][color],
          SIZES[size],
          "rounded tracking-0.4 transition-colors duration-200",
          className,
        )}
      />
    );
  },
);

Button.displayName = "Button";
