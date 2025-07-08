import { type PropsWithChildren, Children, cloneElement, isValidElement, ReactElement } from "react";
import "./List.css";
import { twMerge } from "tailwind-merge";

import { type ListItemProps, ListItem } from "./components/ListItem";

export interface ListProps {
  className?: string;
  newDesign?: boolean;
  orientation: "adaptive" | "horizontal" | "vertical";
  children: ReactElement<ListItemProps, typeof ListItem> | ReactElement<ListItemProps, typeof ListItem>[];
}

const ROW_ORIENTATION = {
  adaptive: "adaptive",
  horizontal: "vertical",
  vertical: "horizontal",
} as const;

export function List({
  newDesign = false,
  className,
  orientation = "vertical",
  children,
}: PropsWithChildren<ListProps>) {
  const getListClasses = () => {
    if (newDesign) {
      return twMerge("bbn-list-new-design", `bbn-list-new-design-${orientation}`, className);
    }
    return twMerge("bbn-list", `bbn-list-${orientation}`, className);
  };

  return (
    <div className={getListClasses()}>
      {Children.map(children, (item) =>
        isValidElement(item)
          ? cloneElement(item, {
              orientation: ROW_ORIENTATION[orientation],
              newDesign,
            })
          : item,
      )}
    </div>
  );
}
