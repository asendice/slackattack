import React from "react";
import "../css/SideBar.css";
import { BsPencilSquare } from "react-icons/bs";
import SideBarSection from "./SideBarSection";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>SlackAttack</h1>
        <div className="sidebar-header-button">
          <BsPencilSquare />
        </div>
      </div>
      <SideBarSection title="Channels"/>
      <SideBarSection title="Direct Messages" />
    </div>
  );
};

export default SideBar;
