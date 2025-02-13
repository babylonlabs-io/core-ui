import { twMerge } from "tailwind-merge";

import { Text } from "@/components/Text";

export interface ListItemProps {
  className?: string;
  orientation?: "adaptive" | "horizontal" | "vertical";
  title: string | JSX.Element;
  value: string | JSX.Element;
  suffix?: JSX.Element;
}

const STYLES = {
  adaptive:
    "flex-row items-center justify-between border-b border-secondary-strokeLight last-of-type:border-0 py-4  md:flex-1 md:flex-col md:items-start md:justify-start md:gap-1.5 md:px-6 md:py-0 md:border-b-0 md:border-r",
  horizontal: "flex-row items-center justify-between border-b border-secondary-strokeLight last-of-type:border-0 py-4",
  vertical:
    "flex-1 flex-col items-start justify-start gap-1.5 px-6 border-r border-secondary-strokeLight last-of-type:border-0",
};

const VALUE_STYLES = {
  adaptive: "flex items-center gap-1 md:justify-between md:w-full",
  horizontal: "flex items-center gap-1",
  vertical: "flex items-center justify-between w-full",
};

export function ListItem({ className, orientation = "horizontal", title, value, suffix }: ListItemProps) {
  return (
    <div className={twMerge("flex", STYLES[orientation], className)}>
      <Text as="div" className="text-accent-secondary" variant={orientation === "horizontal" ? "body1" : "body2"}>
        {title}
      </Text>

      <Text as="div" className={twMerge("text-accent-primary", VALUE_STYLES[orientation])} variant="body1">
        {value}
        {suffix}
      </Text>
    </div>
  );
}
