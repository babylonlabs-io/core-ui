import { forwardRef, type DetailedHTMLProps, type InputHTMLAttributes, type ReactNode } from "react";
import { twJoin } from "tailwind-merge";
import { Loader } from "../Loader";
import "./Input.css";

export interface InputProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "prefix" | "suffix"> {
  className?: string;
  wrapperClassName?: string;
  suffix?: ReactNode;
  isLoading?: boolean;
  onSuffixClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, wrapperClassName, suffix, isLoading, onSuffixClick, disabled, ...props }, ref) => {
    return (
      <div className={twJoin("bbn-input", wrapperClassName)}>
        <input ref={ref} className={twJoin("bbn-input-field", className)} disabled={disabled || isLoading} {...props} />
        {suffix && (
          <div
            className={twJoin(
              "bbn-input-suffix",
              onSuffixClick && !isLoading && "cursor-pointer hover:text-primary-main",
              isLoading && "pointer-events-none",
            )}
            onClick={!isLoading ? onSuffixClick : undefined}
          >
            {isLoading ? <Loader size={20} /> : suffix}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
