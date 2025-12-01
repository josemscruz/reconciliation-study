import "./index.css";
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { TrashCanIcon } from "@/components/ui/icons/akar-icons-trash-can";
import { Button } from "@/components/ui/button";
import { Transaction } from "./types/transactions";
import { deleteTransaction } from "./api/transactionsController";

interface DialogProps {
  transaction: Transaction;
}

export function DeleteTransactionDialogAndButton({ transaction }: DialogProps) {
  async function handleSubmit(id: string) {
    await deleteTransaction(id);
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer mr-2" variant="secondary">
          <TrashCanIcon />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-3">
          <DialogTitle>Delete Transaction</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this transaction? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant="destructive"
              className="cursor-pointer mr-2"
              onClick={() => handleSubmit(transaction.id!)}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
