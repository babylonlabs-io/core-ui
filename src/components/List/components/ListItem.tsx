import { twJoin } from "tailwind-merge";

import { Text } from "@/components/Text";

export interface ListItemProps {
  newDesign?: boolean;
  className?: string;
  orientation?: "adaptive" | "horizontal" | "vertical";
  title: string | JSX.Element;
  value: string | JSX.Element;
  suffix?: JSX.Element;
}

export function ListItem({ newDesign, className, orientation = "horizontal", title, value, suffix }: ListItemProps) {
  return (
    <div
      className={twJoin(
        newDesign ? "bbn-list-item-new-design" : "bbn-list-item",
        `bbn-list-item-${orientation}`,
        newDesign ? "rounded bg-secondary-highlight px-6 py-4" : "",
        className,
      )}
    >
      <Text
        as="div"
        className={twJoin(newDesign ? "bbn-list-title-new-design" : "bbn-list-title", `bbn-list-title-${orientation}`)}
        variant={orientation === "horizontal" ? "body1" : "body2"}
      >
        {title}
      </Text>

      <Text
        as="div"
        className={twJoin(newDesign ? "bbn-list-value-new-design" : "bbn-list-value", `bbn-list-value-${orientation}`)}
        variant="body1"
      >
        {value}
        {suffix}
      </Text>
    </div>
  );
}
