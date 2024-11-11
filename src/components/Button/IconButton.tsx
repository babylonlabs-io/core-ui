import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type IconButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = ({ className, ...restProps }: IconButtonProps) => {
  return (
    <button
      {...restProps}
      className={twMerge(
        "inline-flex justify-center items-center text-primary-light rounded size-10 border border-current",
        className,
      )}
    />
  );
};
