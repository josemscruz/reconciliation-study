import "../tw.css";
import NavItem from "./NavItem";

interface NavProps {
    activeTab: string;
    onTabClick: (tabName: string) => void;
}

function Nav({ activeTab, onTabClick }: NavProps) {
    return (
        <>
            <nav className="bg-blue-300 p-4">
                <div className="container mx-auto flex">
                    <NavItem
                        tabName={"Home"}
                        isActive={activeTab === "Home"}
                        onClick={() => onTabClick("Home")}
                    />
                    <NavItem
                        tabName={"Reconciliation"}
                        isActive={activeTab === "Reconciliation"}
                        onClick={() => onTabClick("Reconciliation")}
                    />
                    <NavItem
                        tabName={"Settings"}
                        isActive={activeTab === "Settings"}
                        onClick={() => onTabClick("Settings")}
                    />
                </div>
            </nav>
        </>
    );
}

export default Nav;
