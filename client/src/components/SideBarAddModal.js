import React, { useState } from "react";
import "../css/SideBarAddModal.css";
import { postChannel } from "../redux/reducers/channelSlice";
import { useSelector, useDispatch } from "react-redux";
const SideBarAddModal = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const serverId = useSelector((state) => state.selectedServer.server._id);

  const dismissModal = (e) => {
    if (e.target.id === "add-modal") {
      setOpen(false);
    } else {
      return null;
    }
  };

  const onAddChannel = () => {
    let obj = {
      serverId: serverId,
      name: name,
    };
    dispatch(postChannel(obj));
    setName("");
    setOpen(false);
  };

  if (open) {
    return (
      <div
        id="add-modal"
        className="add-modal"
        onClick={(e) => dismissModal(e)}
      >
        <div className="add-modal-content">
          <div className="add-modal-input-container">
            <p className="hashtag">#</p>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Channel Name"
            />
          </div>
          <div onClick={() => onAddChannel()} className="add-modal-button">
            Add Channel
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SideBarAddModal;
