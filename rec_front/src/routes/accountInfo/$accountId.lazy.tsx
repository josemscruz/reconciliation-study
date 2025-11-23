import "../../index.css";
import { createLazyFileRoute, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getAccountInfo } from "../../api/accountsController";
import { getTransactiondByAccountId } from "../../api/transactionsController";
import { Account } from "../../types/accounts";
import { Transaction } from "../../types/transactions";
import { TransactionsTable } from "../../TransactionsTable";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createLazyFileRoute(`/accountInfo/$accountId`)({
  component: AccountInfoPage,
});

function AccountInfoPage() {
  const { accountId } = useParams({
    from: "/accountInfo/$accountId",
  });

  const { isLoading: accountLoading, data: accountData } = useQuery<Account>({
    queryKey: ["accountInfo", accountId],
    queryFn: () => getAccountInfo(accountId),
  });

  const { isLoading: transactionsLoading, data: transactionsData } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: () => getTransactiondByAccountId(accountId),
  });

  if (accountLoading || transactionsLoading || !accountData || !transactionsData) {
    return <h2>Loading...</h2>;
  }

  let account: Account = accountData;

  const accountsColumns = [
    { key: "id", text: "System ID" },
    { key: "amount", text: "Amount" },
    { key: "transactionDate", text: "Transaction Date" },
  ];

  return (
    <>
      <div className="px-2 py-5">
        <Card>
          <CardHeader>
            <CardTitle>Account Name</CardTitle>
            <CardDescription>{account.accountName}</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <TransactionsTable columns={accountsColumns} data={transactionsData}></TransactionsTable>
      </div>
    </>
  );
}
