import "../index.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import Data from "../Data.json";
function App() {
    //selected chat id
    const [id, setId] = useState(1);
    //chat array whole app state
    const [chat, setChat] = useState(Data);

    //to get the selected chat from left
    const clickState = (id) => {
        // console.log("Parent State: ", id);
        setId(id);
    };
    //set data from json and update on chat state
    useEffect(() => {
        console.log(Data);
        setChat(Data);
    }, [chat]);
    //to update the state with new recieved array of chat
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
                //updating the chat values then spreading new updated prev
                setChat((prev) => {
                    return [...prev];
                });
            }
        });
    };
    //to add new person to chat in left sidebar
    const addNewChat = (val) => {
        let flag = false;
        console.log("val", val);
        chat.map((c) => {
            if (c.name === val.name) {
                flag = true;
            }
        });
        if (flag == true) return;
        else {
            const len = chat.length + 1;
            setChat((prev) => {
                const newValObj = {
                    id: len,
                    name: val.name,
                    lastmessage: val.lastmessage,
                    messages: [],
                };
                console.log("prev len", chat.length);
                prev.push(newValObj);
                console.log("after len", chat.length);
                console.log("previous spread - ", [...prev]);
                console.log("previous without spread - ", prev);
                //updating the prev by adding new valobj then seting new updated prev
                return [...prev];
            });
            //try
        }
    };
    return (
        <div className="App">
            <div className="container">
                <Sidebar
                    chat={chat}
                    handleState={clickState}
                    handleAddNewChat={addNewChat}
                />
                <Chat id={id} chat={chat} handleChat={updateChat} />
            </div>
        </div>
    );
}

export default App;
