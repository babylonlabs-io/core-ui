import { type PropsWithChildren, Children, cloneElement, isValidElement, ReactElement } from "react";
import "./List.css";

import { type ListItemProps, ListItem } from "./components/ListItem";

export interface ListProps {
  className?: string;
  orientation: "adaptive" | "horizontal" | "vertical";
  children: ReactElement<ListItemProps, typeof ListItem> | ReactElement<ListItemProps, typeof ListItem>[];
}

const ROW_ORIENTATION = {
  adaptive: "adaptive",
  horizontal: "vertical",
  vertical: "horizontal",
} as const;

export function List({ orientation = "vertical", children }: PropsWithChildren<ListProps>) {
  return (
    <div className="flex flex-row items-start gap-2">
      {Children.map(children, (item) =>
        isValidElement(item) ? cloneElement(item, { orientation: ROW_ORIENTATION[orientation] }) : item,
      )}
    </div>
  );
}
