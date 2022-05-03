import "./index.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
    return (
        <div className="App">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default App;
