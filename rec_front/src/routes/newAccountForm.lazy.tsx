import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { createAccount } from "../api/accountsController";
import { Account } from "../types/accounts";
import { useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/newAccountForm")({
  component: RouteComponent,
});

function RouteComponent() {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (accountName == "" || accountNumber == "" || description == "") {
      return alert("All fields are mandatory.");
    }

    const account: Account = {
      accountName: accountName,
      accountNumber: accountNumber,
      description: description,
    };
    const created = await createAccount(account);
    if (created) {
      alert("New account created!");
      navigate({ to: "/accountlist" });
    }
  };

  return (
    <div className="px-2 py-2">
      <h1 className="text-3xl text-blue-500 pt-3">Create a new account</h1>
      <div className="pt-3">
        <label htmlFor="accountNameInput" className="block text-sm font-medium text-gray-700">
          Account Name
        </label>
        <input
          type="text"
          id="accountNameInput"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          onChange={(e) => setAccountName(e.target.value)}
        />
      </div>

      <div className="pt-3">
        <label htmlFor="accountNumberInput" className="block text-sm font-medium text-gray-700">
          Account Number
        </label>
        <input
          type="text"
          id="accountNumberInput"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>

      <div className="pt-3">
        <label htmlFor="descriptionInput" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          id="descriptionInput"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="py-5">
        <button
          onClick={handleClick}
          className="border px-5 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition"
        >
          Create
        </button>
      </div>
    </div>
  );
}
