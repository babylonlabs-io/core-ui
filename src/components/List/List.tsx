import { type PropsWithChildren, Children, cloneElement, isValidElement, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import { type ListItemProps, ListItem } from "./components/ListItem";

export interface ListProps {
  className?: string;
  orientation: "horizontal" | "vertical";
  children: ReactElement<ListItemProps, typeof ListItem> | ReactElement<ListItemProps, typeof ListItem>[];
}

const STYLES = {
  horizontal: "flex py-3",
  vertical: "px-4",
};

const ROW_ORIENTATION = {
  horizontal: "vertical",
  vertical: "horizontal",
} as const;

export function List({ className, orientation = "vertical", children }: PropsWithChildren<ListProps>) {
  return (
    <div className={twMerge("rounded border border-secondary-strokeLight", STYLES[orientation], className)}>
      {Children.map(children, (item) =>
        isValidElement(item) ? cloneElement(item, { orientation: ROW_ORIENTATION[orientation] }) : item,
      )}
    </div>
  );
}
