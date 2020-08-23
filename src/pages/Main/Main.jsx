import React from "react";
import { Nav } from "common/components";
import { MainSearch } from "./components";
import "./Main.css";

function Main({ history }) {
  return (
    <div id="main">
      <Nav />
      <MainSearch push={history.push} />
    </div>
  );
}

export default Main;
