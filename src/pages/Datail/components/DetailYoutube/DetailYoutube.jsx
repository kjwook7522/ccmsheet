import React from "react";
import { YoutubeFilled } from "@ant-design/icons";
import "./DetailYoutube.css";

function DetailYoutube() {
  return (
    <div id="detail-youtube">
      <p>
        <YoutubeFilled style={{ color: "#BC2424" }} /> <a href="https://youtu.be/Ndms0N4sxgM">유튜브 링크</a>
      </p>
      <iframe
        title="youtube"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ndms0N4sxgM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default DetailYoutube;
