import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ItemTableProps } from "../src/types/table";

export function ItemTable<T extends Record<string, any>>({ columns, data }: ItemTableProps<T>) {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow className="bg-gray-200">
          {columns.map((col) => (
            <TableHead key={col.key}>{col.text}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={`row_${i}`}>
            {columns.map((col) => {
              const value = row[col.key];
              return <TableCell key={String(col.key)}>{value}</TableCell>;
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
