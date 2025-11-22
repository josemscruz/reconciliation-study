import "../index.css";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getAccountList } from "../api/accountsController";
import NavigateButton from "../NavigateButton";
import { Account } from "../types/accounts";
import { ItemTable } from "../ItemTable";

export const Route = createLazyFileRoute("/accountList")({
  component: AccountList,
});

function AccountList() {
  const { isLoading, data } = useQuery<Account[]>({
    queryKey: ["accountList"],
    queryFn: () => getAccountList(),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!data) {
    return <h2>Something went wrong. Try again later.</h2>;
  }

  const accountsColumns = [
    { key: "accountNumber", text: "Number" },
    { key: "accountName", text: "Name" },
    { key: "description", text: "Description" },
  ];

  return (
    <>
      <div className="px-2 py-5">
        <NavigateButton path="/newAccountForm" text="Create Account" />
      </div>
      <ItemTable columns={accountsColumns} data={data}></ItemTable>
    </>
  );
}
