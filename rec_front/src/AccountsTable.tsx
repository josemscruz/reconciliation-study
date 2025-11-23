import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ItemTableProps } from "./types/table";
import { Link } from "@tanstack/react-router";

export function AccountsTable<T extends Record<string, any>>({ columns, data }: ItemTableProps<T>) {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow className="bg-gray-200">
          {columns.map((col) => (
            <TableHead key={col.key}>{col.text}</TableHead>
          ))}
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={`row_${i}`}>
            {columns.map((col) => {
              const value = row[col.key];
              return <TableCell key={String(col.key)}>{value}</TableCell>;
            })}
            <TableCell>
              <Link to={`/accountInfo/${row["id"]}`} className="text-blue-400">
                View Account
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
