import { Avatar } from "@mui/material";
import { useState } from "react";
import "./css/popup.css";
import User from "./Users.json";
const PopupList = (props) => {
    // create state `open` with default as false
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* click of button toggles `open` value therefore visibility */}
            <button onClick={() => setOpen(!open)} type="button">
                Add new Chat
            </button>
            {/* If open is true show your <div /> */}
            {open && (
                <div className="hide">
                    {User.map((val) => {
                        return (
                            <div
                                className="hide-list"
                                onClick={() => {
                                    props.handleAddChat(val);
                                }}
                                key={val.id}
                            >
                                <Avatar />
                                <div>
                                    <h2>{val.name}</h2>
                                    <p>{val.lastmessage}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default PopupList;
