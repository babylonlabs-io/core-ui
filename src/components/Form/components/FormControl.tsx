import { type PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";
import "./FormControl.css";

export interface FormControlProps extends PropsWithChildren {
  label?: string;
  hint?: string;
  state?: "default" | "error" | "warning" | "success";
  className?: string;
  wrapperClassName?: string;
}

export function FormControl({
  children,
  label,
  hint,
  state = "default",
  className,
  wrapperClassName,
}: FormControlProps) {
  return (
    <div className={twJoin("bbn-form-control", wrapperClassName)}>
      {label && <label className="bbn-form-control-label mb-2 block text-sm text-primary-light">{label}</label>}

      <div className={className}>{children}</div>

      {hint && <span className={twJoin("bbn-form-control-hint", `bbn-form-control-hint-${state}`)}>{hint}</span>}
    </div>
  );
}
