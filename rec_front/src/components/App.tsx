import "../tw.css";
import Nav from "./Nav";
import MainContent from "./MainContent";
import { useState } from "react";

function App() {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <>
            <Nav activeTab={activeTab} onTabClick={setActiveTab} />
            <MainContent activeTab={activeTab} />
        </>
    );
}

export default App;
