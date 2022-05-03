import { Avatar } from "@mui/material";
import "./css/sidebar.css";

const Sidebarchat = ({ addnewchat }) => {
    return !addnewchat ? (
        <div className="sidebar-chat">
            <Avatar />
            <div className="sidebar-chat-info">
                <h2>React Chat</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div className="sidebar-chat">
            <h2>Add New Chat</h2>
        </div>
    );
};
export default Sidebarchat;
