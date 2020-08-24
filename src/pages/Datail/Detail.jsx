import React from "react";
import { Nav } from "common/components";
import { DetailContent } from "./components";
import "./Detail.css";

function Detail({ history }) {
  return (
    <div id="detail">
      <Nav />
      <DetailContent goBack={history.goBack} />
    </div>
  );
}

export default Detail;
