import React from "react";
import "../css/SideBarOption.css";
import { useDispatch } from "react-redux";
import { setFrame } from "../redux/reducers/frameSlice";
import { setChannel } from "../redux/reducers/selectedChannelSlice";

const SideBarOption = ({ name, channel }) => {
  const dispatch = useDispatch();
  const onOptionClick = () => {
    dispatch(setFrame("Channel"));
    dispatch(setChannel(channel));
  };
  return (
    <div className="side-bar-option" onClick={() => onOptionClick()}>
      <p># {name}</p>
    </div>
  );
};

export default SideBarOption;
