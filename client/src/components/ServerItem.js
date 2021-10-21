import React from "react";
import "../css/ServerItem.css";
import { FaLock } from "react-icons/fa";

const ServerItem = ({ server }) => {
  return (
    <div className="server-item">
      <img className="server-image" src={server.picture} />
      <div className="server-item-info">
        <h2>{server.name}</h2>
        <p>{server.description}</p>
      </div>
      {server.password.length > 0 && <FaLock className="server-lock" />}
      <div className="server-item-button"></div>
    </div>
  );
};

export default ServerItem;
