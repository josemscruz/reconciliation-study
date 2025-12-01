import { Transaction } from "@/types/transactions";

export async function getTransactiondByAccountId(id: string) {
  const response: Response = await fetch(
    `http://localhost:44317/api/app/transaction/by-account-id/${id}`,
  );
  const data = await response.json();
  return data;
}

export async function updateTransactionInfo(id: string, amount: number) {
  const method = "PUT";
  const updatedTransaction: Transaction = {
    id,
    amount,
  };
  const body = JSON.stringify(updatedTransaction);

  const response: Response = await fetch(
    `http://localhost:44317/api/app/transaction?transactionId=${id}`,
    {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: body,
    },
  );

  if (!response.ok) {
    throw new Error("Something went wrong while updating a transaction.");
  }

  return true;
}

export async function deleteTransaction(id: string) {
  const method = "DELETE";

  const response: Response = await fetch(`http://localhost:44317/api/app/transaction/${id}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Something went wrong while deleting a transaction.");
  }

  return true;
}
