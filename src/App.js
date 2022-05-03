import "./index.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useState } from "react";
function App() {
    const [id, setId] = useState(1);
    const clickState = (id) => {
        console.log("Parent State: ", id);
        setId(id);
    };
    return (
        <div className="App">
            <div className="container">
                <Sidebar handleState={clickState} />
                <Chat id={id} />
            </div>
        </div>
    );
}

export default App;
