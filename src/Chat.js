import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import "./css/chat.css";
import Data from "./Data.json";
import { useEffect, useState } from "react";
const Chat = (props) => {
    // console.log(props.id);
    const [name, setName] = useState("him");
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setName(Data[props.id - 1].name);
        setMessages(Data[props.id - 1].messages);
    }, [props.id]);
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />
                <div className="chat-header-info">
                    <h3>{name}</h3>
                    <p>Last Seen..</p>
                </div>
                <div className="header-right">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                {messages.map((val, index) => {
                    return val.user == 1 ? (
                        <p
                            className="chat-message chat-reciever"
                            key={`id${index}`}
                        >
                            <span className="chat-name">you</span>
                            <span>{val.message}</span>
                            <span className="chat-time">12:40 PM</span>
                        </p>
                    ) : (
                        <p className="chat-message" key={`id${index}`}>
                            <span className="chat-name">{name}</span>
                            <span>{val.message}</span>
                            <span className="chat-time">12:40 PM</span>
                        </p>
                    );
                })}
            </div>
            <div className="chat-footer">
                <EmojiEmotionsIcon />
                <AttachFileIcon />
                <form>
                    <input
                        type="text"
                        placeholder="Type your message here..."
                    />
                    <input type="submit" />
                </form>
                <MicIcon />
            </div>
        </div>
    );
};
export default Chat;
