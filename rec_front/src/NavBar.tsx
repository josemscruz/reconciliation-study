import "./tw.css";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function NavBar() {
    // JOSÉ CRUZ: I KNOW THIS IS NOT HOW YOU MAKE A NAV

    const [isActiveHome, setIsActiveHome] = useState(true);
    const [isActiveAccounts, setIsActiveAccounts] = useState(false);
    return (
        <>
            <nav className="bg-gray-700 p-4">
                <div className="container mx-auto flex">
                    <Link
                        to="/home"
                        className={`${
                            isActiveHome ? "text-white" : "text-gray-900"
                        } text-lg font-bold mr-7`}
                        onClick={() => {
                            setIsActiveAccounts(false);
                            setIsActiveHome(true);
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/accountList"
                        className={`${
                            isActiveAccounts ? "text-white" : "text-gray-900"
                        } text-lg font-bold`}
                        onClick={() => {
                            setIsActiveAccounts(true);
                            setIsActiveHome(false);
                        }}
                    >
                        Accounts
                    </Link>
                </div>
            </nav>
        </>
    );
}
