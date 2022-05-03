import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import "./css/chat.css";
const Chat = () => {
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />
                <div className="chat-header-info">
                    <h3>Room Name</h3>
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
                <p className="chat-message chat-reciever">
                    <span className="chat-name">Admin name</span>
                    This is test message
                    <span className="chat-time">12:40 PM</span>
                </p>
                <p className="chat-message chat-reciever">
                    <span className="chat-name">Admin name</span>
                    This is test message
                    <span className="chat-time">12:40 PM</span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Admin name</span>
                    This is test message
                    <span className="chat-time">12:40 PM</span>
                </p>
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
