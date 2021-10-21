import React from "react";
import "../css/JoinServers.css";
import { useSelector } from "react-redux";
import ServerItem from "./ServerItem";
const JoinServers = () => {
  const servers = useSelector((state) => state.servers.servers);
  return (
    <div className="join-servers">
      <div className="join-servers-header">
        <h2>Join Servers</h2>
      </div>

      <div className="servers-container">
        {servers.map((server, index) => {
          return <ServerItem key={index} server={server} />;
        })}
      </div>
    </div>
  );
};

export default JoinServers;
