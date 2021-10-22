import React from "react";
import "../css/ServerItem.css";
import { FaLock, FaUnlock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setServer } from "../redux/reducers/selectedServer";

const ServerItem = ({ server }) => {
  const dispatch = useDispatch();

  const onServerItemClick = () => {
    dispatch(setServer(server));
  };

  return (
    <div className="server-item" onClick={() => onServerItemClick()}>
      <img
        alt={`${server.name} logo`}
        className="server-image"
        src={server.picture}
      />
      <div className="server-item-info">
        <h2>{server.name}</h2>
        <p>{server.description}</p>
      </div>
      {server.password.length > 0 ? (
        <FaLock className="server-lock" />
      ) : (
        <FaUnlock className="server-lock" />
      )}
      <div className="server-item-button"></div>
    </div>
  );
};

export default ServerItem;
