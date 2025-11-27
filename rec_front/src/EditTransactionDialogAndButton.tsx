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

interface DialogProps {
  transaction: Transaction;
}

export function EditTransactionDialogAndButton({ transaction }: DialogProps) {
  //const [accountName, setAccountName] = useState(transaction);
  //const [description, setDescription] = useState(account.description);

  // async function handleSubmit(accountName: string, description: string, id: string) {
  //   await updateAccountInfo(accountName, description, id);
  //   window.location.reload();
  // }

  console.log(transaction);

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
            <Label htmlFor="accountName-input">Account Name</Label>
            <Input
              id="accountName-input"
              //value={accountName}
              //onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="accountDescription-input">Description</Label>
            <Input
              id="accountDescription-input"
              //value={description}
              //onChange={(e) => setDescription(e.target.value)}
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
            <Button
              className="cursor-pointer mr-2"
              //onClick={() => handleSubmit(accountName, description, account.id!)}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
