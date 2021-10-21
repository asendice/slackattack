import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import "../css/App.css";
import { useDispatch } from "react-redux";
import { getServers } from "../redux/reducers/serverSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ran");
    dispatch(getServers());
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
