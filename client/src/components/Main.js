import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";
import "../css/Main.css";

const Main = () => {
  return (
    <div className="main">
      <SideBar />
      <Feed />
    </div>
  );
};

export default Main;
