import React, { useState } from "react";
import "../css/SideBar.css";
import { BsPencilSquare } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import SideBarSection from "./SideBarSection";
import ServerModal from "./ServerModal";
import { useSelector } from "react-redux";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const name = useSelector((state) => state.selectedServer.server.name);
  const channels = useSelector((state) => state.channels.channels)

  return (
    <div className="sidebar">
      <div onClick={() => setOpen(!open)} className="sidebar-header">
        <h1>
          {name} <FaCaretDown />
        </h1>
        <div className="sidebar-header-button">
          <BsPencilSquare />
        </div>
      </div>
      <SideBarSection title="Channels" channels={channels} />
      <SideBarSection title="Direct Messages" />
      <ServerModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default SideBar;