export interface ColumnDef {
  key: string;
  text: string;
}

export interface ItemTableProps<T> {
  columns: ColumnDef[];
  data: T[];
}
