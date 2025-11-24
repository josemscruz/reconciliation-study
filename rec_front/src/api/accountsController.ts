import { Account } from "../types/accounts";

export async function getAccountList() {
  const response: Response = await fetch("http://localhost:44317/api/app/account");
  const data = await response.json();
  return data;
}

export async function getAccountInfo(id: string) {
  const response: Response = await fetch(`http://localhost:44317/api/app/account/account/${id}`);
  const data = await response.json();
  return data;
}

export async function createAccount(account: Account) {
  const method = "POST";
  const body = JSON.stringify(account);
  const response: Response = await fetch(`http://localhost:44317/api/app/account`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  if (!response.ok) {
    throw new Error("Something went wrong while posting.");
  }

  return true;
}

export async function updateAccountInfo(accountName: string, description: string, id: string) {
  const method = "PUT";
  const updatedAccount: Account = {
    accountName,
    description,
    id,
  };
  const body = JSON.stringify(updatedAccount);

  const response: Response = await fetch(`http://localhost:44317/api/app/account?accountId=${id}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  if (!response.ok) {
    throw new Error("Something went wrong while posting.");
  }

  return true;
}
