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
