import "../tw.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";

interface Item {
    id: number;
    source: string;
    amount: number;
    recId: string;
}

interface Account {
    id: number;
    name: string;
    items: Item[];
}

function AccountList() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/accounts", {
                    method: "GET",
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`${response.status}: ${errorText}`);
                }
                const data: Account[] = await response.json();
                setAccounts(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch accounts.", error);
                setError(`Could not load accounts: ${error}`);
                setLoading(false);
            }
        };
        fetchAccounts();
    }, []);

    if (loading) {
        return <Loading />;
    } else if (error != null) {
        return <h1 className="text-red-600">Error: {error}</h1>;
    } else {
        const accountListItems = accounts.map((a) => {
            let bo: number = 0;
            let psp: number = 0;
            if (a.items.length > 0) {
                a.items.forEach((item) => {
                    if (item.source == "BO") {
                        bo++;
                    } else {
                        psp++;
                    }
                });
            }
            return (
                <tr className="text-center" key={a.id}>
                    <td className="border-separate border-spacing-2 border border-gray-300">
                        <a href="#" className="m-2">
                            {a.name}
                        </a>
                    </td>
                    <td className="border-separate border-spacing-2 border border-gray-300">
                        <p className="m-2">{bo}</p>
                    </td>
                    <td className="border-separate border-spacing-2 border border-gray-300">
                        <p className="m-2">{psp}</p>
                    </td>
                </tr>
            );
        });
        return (
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="border border-gray-500">
                            <p className="m-2">Account Name</p>
                        </th>
                        <th className="border border-gray-500">
                            <p className="m-2">BO Items</p>
                        </th>
                        <th className="border border-gray-500">
                            <p className="m-2">PSP Items</p>
                        </th>
                    </tr>
                </thead>
                <tbody>{accountListItems}</tbody>
            </table>
        );
    }
}
export default AccountList;
