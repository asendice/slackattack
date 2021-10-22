import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import "../css/SearchModal.css";

const SearchModal = ({ open, setOpen }) => {
  const dismissModal = (e) => {
    if (e.target.id === "search-modal") {
      setOpen(false);
    } else {
      return null;
    }
  };

  if (open) {
    return (
      <div
        id="search-modal"
        className="search-modal"
        onClick={(e) => dismissModal(e)}
      >
        <div className="search-modal-content">
          <div className="input-container">
            <FaSearch className="input-icon" />
            <input placeholder="Search for anything" />
            <CgClose className="input-icon" onClick={() => setOpen(!open)} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SearchModal;
