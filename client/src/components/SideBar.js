import React, { useState } from "react";
import "../css/SideBar.css";
import { BsPencilSquare } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import SideBarSection from "./SideBarSection";
import ServerModal from "./ServerModal";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <div onClick={() => setOpen(!open)} className="sidebar-header">
        <h1>
          SlackAttack <FaCaretDown />
        </h1>
        <div className="sidebar-header-button">
          <BsPencilSquare />
        </div>
      </div>
      <SideBarSection title="Channels" />
      <SideBarSection title="Direct Messages" />
      <ServerModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default SideBar;
