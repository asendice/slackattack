import React, { useState } from "react";
import "../css/SideBarSection.css";
import { FaCaretDown, FaCaretRight, FaPlus, FaEllipsisV } from "react-icons/fa";
import SideBarOption from "./SideBarOption";

const SideBarSection = ({ title, channels }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="sidebar-section">
      <div className="sidebar-section-header">
        <div
          onClick={() => setActive(!active)}
          className="sidebar-section-icon-container"
        >
          {active ? <FaCaretDown /> : <FaCaretRight />}
        </div>
        <div
          onClick={() => setActive(!active)}
          className="sidebar-section-title"
        >
          <p>{title}</p>
        </div>

        <div className="sidebar-section-icon-container">
          <FaEllipsisV />
        </div>
        <div className="sidebar-section-icon-container">
          <FaPlus />
        </div>
      </div>
      {channels &&
        active &&
        channels.map((channel, index) => {
          return <SideBarOption key={index} name={channel.name} channel={channel} />;
        })}
    </div>
  );
};

export default SideBarSection;
