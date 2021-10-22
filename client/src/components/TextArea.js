import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import "../css/TextArea.css";

const TextArea = ({ name }) => {
  return (
    <div className="text-area">
      <div className="text-area-container">
        <input placeholder={`Message #${name}`} />
        <div className="text-area-actions">
          <div className="text-area-left"></div>
          <div className="text-area-right">
            <div className="send-button">
              <FaRegPaperPlane className="send-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
