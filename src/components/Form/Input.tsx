import { forwardRef, type DetailedHTMLProps, type InputHTMLAttributes, type ReactNode } from "react";
import { twJoin } from "tailwind-merge";
import "./Input.css";
import { FormControl } from "./components/FormControl";

export interface InputProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "prefix" | "suffix"> {
  className?: string;
  wrapperClassName?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  state?: "default" | "error" | "warning";
  hint?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, wrapperClassName, prefix, suffix, disabled = false, state = "default", hint, label, ...props },
    ref,
  ) => {
    return (
      <FormControl label={label} hint={hint} state={state} wrapperClassName={wrapperClassName}>
        <div className={twJoin("bbn-input-wrapper", disabled && "bbn-input-disabled", `bbn-input-${state}`)}>
          {prefix && <div className="bbn-input-prefix">{prefix}</div>}
          <input ref={ref} className={twJoin("bbn-input-field", className)} disabled={disabled} {...props} />
          {suffix && <div className="bbn-input-suffix">{suffix}</div>}
        </div>
      </FormControl>
    );
  },
);

Input.displayName = "Input";
