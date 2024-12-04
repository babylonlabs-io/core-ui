import type { ReactNode } from "react";

export type ColumnProps<T = unknown> = {
  key: string;
  header: string;
  render?: (value: unknown, row: T) => ReactNode;
  sorter?: (a: T, b: T) => number;
};

export interface TableProps<T extends { id: string | number }> {
  data: T[];
  columns: ColumnProps<T>[];
  className?: string;
  hasMore?: boolean;
  loading?: boolean;
  onLoadMore?: () => void;
  onRowSelect?: (row: T) => void;
}
