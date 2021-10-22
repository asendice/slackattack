import React from "react";
import "../css/SideBarOption.css";
import { useDispatch, useSelector } from "react-redux";
import { setFrame } from "../redux/reducers/frameSlice";
import { setChannel } from "../redux/reducers/selectedChannelSlice";

const SideBarOption = ({ name, channel }) => {
  const dispatch = useDispatch();
  const frame = useSelector((state) => state.frame.frame);
  const selectedChannel = useSelector(
    (state) => state.selectedChannel.channel.name
  );
  const onOptionClick = () => {
    dispatch(setChannel(channel));
    dispatch(setFrame("Channel"));
  };

  return (
    <div
      style={{
        backgroundColor:
          selectedChannel === name && frame === "Channel"
            ? "#27242c"
            : "#19171d",
      }}
      className="side-bar-option"
      onClick={() => onOptionClick()}
    >
      <p># {name}</p>
    </div>
  );
};

export default SideBarOption;
