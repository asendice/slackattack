import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { getServers } from "../redux/reducers/serverSlice";
import { getChannels } from "../redux/reducers/channelSlice";

function App() {
  const dispatch = useDispatch();
  const selectedServer = useSelector((state) => state.selectedServer.server);

  useEffect(() => {
    dispatch(getServers());
  }, []);

  useEffect(() => {
    if (selectedServer) {
      dispatch(getChannels(selectedServer._id));
    }
  }, [selectedServer]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
