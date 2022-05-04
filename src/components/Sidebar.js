import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "../css/sidebar.css";
import Sidebarchat from "./SidebarChat";
import Data from "../Data.json";
import { useEffect, useState } from "react";
import PopupList from "./PopUpList";
const Sidebar = (props) => {
    //last message
    const [lastmessage, setLastMessage] = useState("dfd");
    //set the text in search bar
    const [searchText, setSearchText] = useState("");
    //set last message
    useEffect(() => {
        const message = props.chat.at(-1).name;
        console.log(message);
        setLastMessage(message);
    }, []);
    //handle callback for list item
    const click = (id) => {
        // console.log("clicked", id);
        props.handleState(id);
    };
    // to set search value in search bar
    const handleSearch = (e) => {
        // console.log("search", e.target.value);
        // console.log("state text", searchText);

        setSearchText(e.target.value);
    };
    // to add new chat item in sidebar chat list
    const addNewChat = (val) => {
        // console.log("add new chat");
        props.handleAddNewChat(val);
    };
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
                        onChange={(e) => {
                            handleSearch(e);
                        }}
                    />
                </div>
            </div>
            <div className="sidebar-chats">
                {/* <Sidebarchat addnewchat /> */}
                <PopupList handleAddChat={addNewChat} />
                {props.chat
                    .filter((val) => {
                        if (val.name.includes(searchText)) return val;
                    })
                    .map((val) => {
                        return (
                            <Sidebarchat
                                name={val.name}
                                lastmessage={val.lastmessage}
                                handleclick={click}
                                key={val.id}
                                id={val.id}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Sidebar;
