import React from "react";
import "../css/Header.css";
import { FaArrowLeft, FaArrowRight, FaRegClock, FaSearch} from "react-icons/fa";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-icon-container">
        <FaArrowLeft className="icon"/>
        <FaArrowRight className="icon"/>
        <FaRegClock className="icon"/>
        <div className="header-search-button">
          <FaSearch className="icon"/>
          <p>Search SlackAttack</p>
        </div>
      </div>

      <div className="header-avatar-container">
        <Avatar />
      </div>
    </div>
  );
};

export default Header;