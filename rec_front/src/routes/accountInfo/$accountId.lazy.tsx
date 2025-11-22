import "../../index.css";
import { createLazyFileRoute, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getAccountInfo } from "../../api/accountsController";
import { getTransactiondByAccountId } from "../../api/transactionsController";

interface Account {
  accountName: string;
  accountNumber: string;
  description: string;
  id: string;
}

interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  transactionDate: Date;
}

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

  return (
    <>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 m-4">
        <div>
          <h1 className="text-2xl font-semibold mb-2 text-gray-800">Account Name</h1>
          <p className="text-gray-600">{account.accountName}</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2 text-gray-800">Description</h1>
          <p className="text-gray-600">{account.description}</p>
        </div>
      </div>
      <div>
        <table className="min-w-full border border-gray-300 mt-5 ">
          <thead className="bg-gray-500 text-left">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-white">Id</th>
              <th className="px-4 py-2 border border-gray-300 text-white">Amount</th>
              <th className="px-4 py-2 border border-gray-300 text-white">Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction: Transaction) => {
              return (
                <tr key={`transactions${transaction.id}`} className="hover:bg-blue-50">
                  <td className="px-4 py-2 border border-gray-300">{transaction.id}</td>
                  <td className="px-4 py-2 border border-gray-300">{transaction.amount}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {new Date(transaction.transactionDate).toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
