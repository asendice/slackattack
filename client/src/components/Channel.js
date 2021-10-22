import React from "react";
import "../css/Channel.css";
import TextArea from "./TextArea";
import { useSelector } from "react-redux";

const Channel = () => {
  const channel = useSelector((state) => state.selectedChannel.channel);

  return (
    <div className="channel">
      <div className="channel-header">
        <h2># {channel.name}</h2>
      </div>
      <div className=" channel-feed"></div>
      <div className="channel-message">
        <TextArea name={channel.name} />
      </div>
    </div>
  );
};

export default Channel;
