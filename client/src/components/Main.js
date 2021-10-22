import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";
import CreateServer from "./CreateServer";
import JoinServers from "./JoinServers";
import Channel from "./Channel";
import "../css/Main.css";
import { useSelector } from "react-redux";

const Main = () => {
  const frame = useSelector((state) => state.frame.frame);

  return (
    <div className="main">
      <SideBar />
      {frame === "Feed" ? <Feed /> : null}
      {frame === "Create Server" ? <CreateServer /> : null}
      {frame === "Join Servers" ? <JoinServers /> : null}
      {frame === "Channel" ? <Channel /> : null}
    </div>
  );
};

export default Main;
