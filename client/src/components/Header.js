import React, { useState } from "react";
import "../css/Header.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegClock,
  FaSearch,
} from "react-icons/fa";
import Avatar from "./Avatar";
import SearchModal from "./SearchModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="header-icon-container">
        <FaArrowLeft className="icon" />
        <FaArrowRight className="icon" />
        <FaRegClock className="icon" />
        <div className="header-search-button" onClick={() => setOpen(!open)}>
          <FaSearch className="icon" />
          <p>Search SlackAttack</p>
        </div>
      </div>

      <div className="header-avatar-container">
        <Avatar />
      </div>
      <SearchModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
