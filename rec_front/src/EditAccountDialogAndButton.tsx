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
import { PencilIcon } from "@/components/ui/icons/akar-icons-pencil";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Account } from "./types/accounts";
import { updateAccountInfo } from "./api/accountsController";
import { useState } from "react";

interface DialogProps {
  account: Account;
}

export function EditAccountDialogAndButton({ account }: DialogProps) {
  const [accountName, setAccountName] = useState(account.accountName);
  const [description, setDescription] = useState(account.description);

  async function handleSubmit(accountName: string, description: string, id: string) {
    await updateAccountInfo(accountName, description, id);
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer mr-2" variant="outline">
          <PencilIcon />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-3">
          <DialogTitle>Edit Account</DialogTitle>
          <DialogDescription>Update your account information below.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="accountName-input">Account Name</Label>
            <Input
              id="accountName"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="accountDescription-input">Description</Label>
            <Input
              id="accountDescription-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              onClick={() => handleSubmit(accountName, description, account.id!)}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
