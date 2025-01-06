import { FormControl } from "@/components/Form";
import { useField } from "@/widgets/form/hooks";
import { FieldProps } from "@/widgets/form/types";

export interface HiddenFieldProps extends FieldProps {
  displayError?: boolean;
}

export function HiddenField({ displayError = false, ...props }: HiddenFieldProps) {
  const { invalid, error, value, onChange, onBlur, disabled, name, ref } = useField(props);

  const fieldState = invalid && displayError ? "error" : "default";
  const fieldHint = invalid && displayError ? error : "";
  const input = (
    <input ref={ref} type="hidden" name={name} disabled={disabled} value={value} onChange={onChange} onBlur={onBlur} />
  );

  return displayError ? (
    <FormControl hint={fieldHint} state={fieldState}>
      {input}
    </FormControl>
  ) : (
    input
  );
}
