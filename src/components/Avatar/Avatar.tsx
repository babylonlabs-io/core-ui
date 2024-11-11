import type { CSSProperties, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface AvatarProps extends PropsWithChildren {
  alt?: string;
  url?: string;
  className?: string;
  style?: CSSProperties;
  size?: "tiny" | "small" | "medium" | "large";
  variant?: "circular" | "rounded" | "square";
}

const SIZES = {
  tiny: "size-[1.125rem]",
  small: "size-6",
  medium: "size-8",
  large: "size-10",
} as const;

const VARIANTS = {
  circular: "rounded-full",
  rounded: "rounded",
  square: "",
} as const;

export function Avatar({ className, style, size = "large", variant = "circular", alt, url, children }: AvatarProps) {
  return (
    <div
      style={style}
      className={twMerge(
        "inline-flex justify-center items-center overflow-hidden",
        SIZES[size],
        VARIANTS[variant],
        className,
      )}
    >
      {url ? <img className="size-full object-cover object-center" src={url} alt={alt} /> : children}
    </div>
  );
}
