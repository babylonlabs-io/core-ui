import { forwardRef, useState, useCallback, type DetailedHTMLProps, type SelectHTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";
import { RiArrowDownSLine } from "react-icons/ri";
import { Portal } from "../Portal";
import "./Select.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLDivElement>, HTMLDivElement>, "value" | "onChange"> {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ className, options, value, onChange, placeholder = "Select option", ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(
      options.find((option) => option.value === value),
    );

    const handleSelect = useCallback(
      (option: SelectOption) => {
        setSelectedOption(option);
        onChange?.(option.value);
        setIsOpen(false);
      },
      [onChange],
    );

    return (
      <div className="bbn-select" ref={ref}>
        <div className={twJoin("bbn-select-trigger", className)} onClick={() => setIsOpen(!isOpen)} {...props}>
          <span>{selectedOption?.label || placeholder}</span>
          <RiArrowDownSLine className={twJoin("bbn-select-icon", isOpen && "bbn-select-icon-open")} size={20} />
        </div>

        <Portal mounted={isOpen}>
          <div className="bbn-select-menu">
            {options.map((option) => (
              <div
                key={option.value}
                className={twJoin(
                  "bbn-select-option",
                  selectedOption?.value === option.value && "bbn-select-option-selected",
                )}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </Portal>
      </div>
    );
  },
);

Select.displayName = "Select";
