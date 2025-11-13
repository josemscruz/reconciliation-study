import React from "react";
import "../tw.css";

interface NavItemProps {
    tabName: string;
    isActive: boolean;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavItem({ tabName, isActive, onClick }: NavItemProps) {
    return (
        <a
            href="#"
            onClick={onClick}
            className={`${
                isActive ? "text-white" : "text-blue-950"
            } text-lg font-bold m-3`}
        >
            {tabName}
        </a>
    );
}

export default NavItem;
