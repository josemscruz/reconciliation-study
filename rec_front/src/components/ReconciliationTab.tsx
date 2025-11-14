import "../tw.css";
import AccountList from "./AccountList";

function ReconciliationTab() {
    return (
        <div className="m-5">
            <h1 className="text-5xl text-blue-600">Accounts</h1>
            <br />
            <AccountList />
        </div>
    );
}
export default ReconciliationTab;
