import { createContext } from "react";
import type { ColumnProps } from "../components/Table/types";

export interface TableContextType<T = unknown> {
  data: T[];
  columns: ColumnProps<T>[];
  sortStates: {
    [key: string]: {
      direction: "asc" | "desc" | null;
      priority: number;
    };
  };
  hoveredColumn?: string;
  onColumnHover?: (column: string | undefined) => void;
  onColumnSort?: (columnKey: string, sorter?: (a: T, b: T) => number) => void;
  onRowSelect?: (row: T) => void;
}

export const TableContext = createContext<TableContextType<unknown>>({
  data: [],
  columns: [],
  sortStates: {},
  hoveredColumn: undefined,
  onColumnHover: undefined,
  onColumnSort: undefined,
  onRowSelect: undefined,
});
