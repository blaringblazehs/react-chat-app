import { Avatar } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./css/sidebar.css";

const Sidebarchat = (props) => {
    return !props.addnewchat ? (
        <div
            className="sidebar-chat"
            onClick={() => {
                props.handleclick(props.id);
            }}
        >
            <Avatar />
            <div className="sidebar-chat-info">
                <h2>{props.name}</h2>
                <p>{props.lastmessage}</p>
            </div>
        </div>
    ) : (
        <div className="sidebar-addchat">
            <h2>Add New Chat</h2>
            <AddCircleIcon />
        </div>
    );
};
export default Sidebarchat;
