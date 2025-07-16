import { Text } from "../../../components/Text";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface FeeItemProps extends PropsWithChildren {
  /**
   * Label to show on the left side of the row (e.g. "Network Fee").
   */
  title: string;
  /**
   * Optional additional Tailwind classes.
   */
  className?: string;
  /**
   * Optional hint rendered below the value on the right (e.g. USD equivalent).
   */
  hint?: string;
}

export function FeeItem({ title, children, className, hint }: FeeItemProps) {
  return (
    <div
      className={twMerge(
        "flex flex-row items-center justify-between text-accent-primary",
        hint && "items-start",
        className,
      )}
    >
      <Text as="div" variant="body1">
        {title}
      </Text>

      {!hint ? (
        <Text as="div" className="flex items-center gap-2">
          {children}
        </Text>
      ) : (
        <div className="flex flex-col items-end">
          <Text as="div" className="flex items-center gap-2">
            {children}
          </Text>
          <Text as="div" variant="body2" className="text-accent-secondary">
            {hint}
          </Text>
        </div>
      )}
    </div>
  );
}
