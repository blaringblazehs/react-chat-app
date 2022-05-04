import "./index.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import Data from "./Data.json";
function App() {
    const [id, setId] = useState(1);
    const [chat, setChat] = useState(Data);
    const clickState = (id) => {
        console.log("Parent State: ", id);
        setId(id);
    };
    useEffect(() => {
        console.log(Data);
        setChat(Data);
    }, []);
    const updateChat = (data) => {
        console.log("chat updated", data);
        const newdata = {
            id: id,
            name: chat[id - 1].name,
            lastmessage: data[0].messages,
            messages: data,
        };
        // setChat((prev) => {
        //     return [...prev, newdata];
        // });
        chat.map((val) => {
            if (val.id == id) {
                val.messages = data;
                const lastmes = data[data.length - 1].message;
                val.lastmessage = lastmes;
                setChat((prev) => {
                    return [...prev];
                });
            }
        });
    };
    return (
        <div className="App">
            <div className="container">
                <Sidebar chat={chat} handleState={clickState} />
                <Chat id={id} chat={chat} handleChat={updateChat} />
            </div>
        </div>
    );
}

export default App;
