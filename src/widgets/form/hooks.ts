import { useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";

interface FieldProps<V> {
  name: string;
  defaultValue?: V;
  disabled?: boolean;
  autoFocus?: boolean;
  shouldUnregister?: boolean;
}

export function useField<V = string>({
  name,
  defaultValue,
  disabled = false,
  autoFocus = false,
  shouldUnregister = false,
}: FieldProps<V>) {
  const { setFocus } = useFormContext();
  const { field, fieldState } = useController({ name, defaultValue, disabled, shouldUnregister });
  const { invalid, isTouched, error } = fieldState;

  useEffect(() => {
    if (autoFocus) {
      setFocus(name);
    }
  }, [name]);

  return {
    ...field,
    value: field.value as V,
    invalid: invalid && isTouched,
    error: error?.message ?? "",
  };
}
