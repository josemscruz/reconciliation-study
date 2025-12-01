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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Transaction } from "./types/transactions";
import { useState } from "react";
import { MoreVerticalIcon } from "./components/ui/icons/akar-icons-more-vertical";
import { updateTransactionInfo } from "./api/transactionsController";

interface DialogProps {
  transaction: Transaction;
}

export function EditTransactionDialogAndButton({ transaction }: DialogProps) {
  const [amount, setAmount] = useState(transaction.amount);

  async function handleSubmit(amount: number) {
    await updateTransactionInfo(transaction.id, amount);
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer mr-2" variant="ghost">
          <MoreVerticalIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-3">
          <DialogTitle>Edit Transaction</DialogTitle>
          <DialogDescription>Update your transaction information below.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="accountName-input">Amount</Label>
            <Input
              type="number"
              id="accountName-input"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="cursor-pointer mr-2" onClick={() => handleSubmit(amount)}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
