import "../tw.css";
import HomeTab from "./HomeTab";
import ReconciliationTab from "./ReconciliationTab";
import SettingsTab from "./SettingsTab";

interface MainContentProps {
    activeTab: string;
}

function MainContent({ activeTab }: MainContentProps) {
    switch (activeTab) {
        case "Home":
            return <HomeTab />;
        case "Reconciliation":
            return <ReconciliationTab />;
        case "Settings":
            return <SettingsTab />;
        default:
            break;
    }
}
export default MainContent;
