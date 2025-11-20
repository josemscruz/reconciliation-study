import "../tw.css";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getAccountList } from "../api/accountsController";
import CreateButton from "../CreateButton";
import { Account } from "../types/accounts";

export const Route = createLazyFileRoute("/accountList")({
  component: AccountList,
});

export default function AccountList() {
  const { isLoading, data } = useQuery<Account[]>({
    queryKey: ["accountList"],
    queryFn: () => getAccountList(),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="px-2 py-2">
        <CreateButton name="Account" />
      </div>
      <div className="px-2">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-500 text-left">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-white">Number</th>
              <th className="px-4 py-2 border border-gray-300 text-white">Name</th>
              <th className="px-4 py-2 border border-gray-300 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((account: Account) => {
              return (
                <tr key={`account${account.accountNumber}`} className="hover:bg-blue-50">
                  <td className="px-4 py-2 border border-gray-300">{account.accountNumber}</td>
                  <td className="px-4 py-2 border border-gray-300">{account.accountName}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <Link
                      className="text-blue-500"
                      params={{ accountId: account.id }}
                      to="/accountInfo/$accountId"
                    >
                      View Account
                    </Link>
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
