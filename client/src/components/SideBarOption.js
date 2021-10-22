import React from "react";
import "../css/SideBarOption.css";

const SideBarOption = ({ name }) => {
  return (
    <div className="side-bar-option">
      <p># {name}</p>
    </div>
  );
};

export default SideBarOption;
