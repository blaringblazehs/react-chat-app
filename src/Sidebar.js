import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./css/sidebar.css";
import Sidebarchat from "./SidebarChat";
const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <Avatar />
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search or Start a new Chat"
                    />
                </div>
            </div>
            <div className="sidebar-chats">
                <Sidebarchat addnewchat />
                <Sidebarchat />
                <Sidebarchat />
            </div>
        </div>
    );
};

export default Sidebar;
