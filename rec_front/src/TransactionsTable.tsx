import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ItemTableProps } from "./types/table";
import { EditTransactionDialogAndButton } from "./EditTransactionDialogAndButton";
import { DeleteTransactionDialogAndButton } from "./DeleteTransactionDialogAndButton";
import { Transaction } from "./types/transactions";

export function TransactionsTable({ columns, data }: ItemTableProps<Transaction>) {
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
              <EditTransactionDialogAndButton transaction={row} />
              <DeleteTransactionDialogAndButton transaction={row} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
