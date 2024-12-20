import { useField } from "@/widgets/form/hooks";
import { FieldProps } from "@/widgets/form/types";

export function HiddenField(props: FieldProps) {
  const { value, onChange, onBlur, disabled, name, ref } = useField(props);

  return (
    <input ref={ref} type="hidden" name={name} disabled={disabled} value={value} onChange={onChange} onBlur={onBlur} />
  );
}
