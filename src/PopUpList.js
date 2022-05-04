import { Avatar } from "@mui/material";
import { useState } from "react";
import "./css/popup.css";
import User from "./Users.json";
const PopupList = ({ idMessage }) => {
    // create state `open` with default as false
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* click of button toggles `open` value therefore visibility */}
            <button onClick={() => setOpen(!open)} type="button">
                {idMessage}
            </button>
            {/* If open is true show your <div /> */}
            {open && (
                <div className="hide">
                    {User.map((val) => {
                        return (
                            <div className="hide-list">
                                <Avatar />
                                <p>{val.name}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default PopupList;
