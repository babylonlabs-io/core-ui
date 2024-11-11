import {
  type ChangeEvent,
  type DetailedHTMLProps,
  type FocusEventHandler,
  type HTMLAttributes,
  forwardRef,
} from "react";
import { twMerge, twJoin } from "tailwind-merge";

import { Text } from "@/components/Text";
import { useControlledState } from "@/hooks/useControlledState";

export interface ToggleProps {
  id?: string;
  name?: string;
  label?: string;
  inputType: "radio" | "checkbox";
  orientation?: "left" | "right";
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  inputProps?: Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "id" | "name" | "value" | "checked" | "defaultChecked" | "disabled" | "ref"
  > & {
    pattern?: string;
  };
  renderIcon: (checked: boolean) => JSX.Element;
  onChange?: (value?: boolean) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  {
    label,
    checked,
    defaultChecked = false,
    inputProps,
    orientation = "left",
    disabled = false,
    className,
    inputType,
    labelClassName,
    renderIcon,
    onChange,
    ...restProps
  },
  ref,
) {
  const [checkedState = false, setCheckedState] = useControlledState({
    value: checked,
    defaultValue: defaultChecked,
    onStateChange: onChange,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCheckedState(e.currentTarget.checked);
    inputProps?.onChange?.(e);
  }

  const toggle = (
    <span
      className={twMerge(
        "relative inline-block transition-colors duration-200",
        disabled ? "text-primary/12" : "text-primary-light hover:text-primary-main",
        className,
      )}
    >
      {renderIcon(checkedState)}

      <input
        ref={ref}
        type={inputType}
        disabled={disabled}
        className={twJoin("absolute inset-0 z-[1] opacity-0", disabled ? "cursor-default" : "cursor-pointer")}
        {...restProps}
        {...inputProps}
        checked={checkedState}
        onChange={handleChange}
      />
    </span>
  );

  if (label) {
    return (
      <Text
        as="label"
        variant="body1"
        className={twMerge(
          "inline-flex h-5 items-center gap-4",
          orientation === "left" ? "flex-row" : "flex-row-reverse",
          labelClassName,
        )}
      >
        {toggle}
        {label}
      </Text>
    );
  }

  return toggle;
});
