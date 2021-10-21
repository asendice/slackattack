import React from "react";
import { useDispatch } from "react-redux";
import { setFrame } from "../redux/reducers/frameSlice";
import "../css/ServerModal.css";

const ServerModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const dismissModal = (e) => {
    if (e.target.id === "server-modal") {
      setOpen(false);
    } else {
      return null;
    }
  };

  const onCreateServerClick = () => {
    dispatch(setFrame("Create Server"));
    setOpen(!open);
  };
  const onJoinServerClick = () => {
    dispatch(setFrame("Join Servers"));
    setOpen(!open);
  };

  if (open) {
    return (
      <div
        id="server-modal"
        className="server-modal"
        onClick={(e) => dismissModal(e)}
      >
        <div className="server-modal-content">
          <div className="server-modal-header">
            <h3>Server Name</h3>
          </div>
          <div
            className="server-modal-option"
            onClick={() => onCreateServerClick()}
          >
            <p>Create Server</p>
          </div>
          <div
            className="server-modal-option"
            onClick={() => onJoinServerClick()}
          >
            <p>Join Servers</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ServerModal;
