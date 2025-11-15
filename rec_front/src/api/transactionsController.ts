export async function getTransactiondByAccountId(id: string) {
  const response: Response = await fetch(
    `http://localhost:44317/api/app/transaction/by-account-id/${id}`,
  );
  const data = await response.json();
  return data;
}
