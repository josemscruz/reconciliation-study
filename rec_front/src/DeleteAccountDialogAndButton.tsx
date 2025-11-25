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
import { Account } from "./types/accounts";
import { deleteAccount } from "./api/accountsController";
import { useNavigate } from "@tanstack/react-router";

interface DialogProps {
  account: Account;
}

export function DeleteAccountDialogAndButton({ account }: DialogProps) {
  const navigate = useNavigate();

  async function handleSubmit(id: string) {
    await deleteAccount(id);
    navigate({ to: `${"/accountList"}` });
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
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this account? This action cannot be undone.
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
              onClick={() => handleSubmit(account.id!)}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
