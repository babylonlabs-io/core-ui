import type { HTMLProps } from "react";
import { useFormContext } from "react-hook-form";

export function HiddenField({ name, ...inputProps }: HTMLProps<HTMLInputElement> & { name: string }) {
  const { register } = useFormContext();
  const props = register(name);

  return <input {...inputProps} {...props} type="hidden" />;
}
