import React from "react";
import "./DetailInfo.css";

function DetailInfo() {
  return (
    <div id="detail-info" data-aos="fade-up" data-aos-duration="800">
      <div className="album-image">
        <img src="/asset/images/마커스2집.jpg" alt="album" />
      </div>
      <div className="info">
        <h1>찬양의 제사 드리며</h1>
        <h2>마커스워십</h2>
        <h3>앨범 | 마커스2집</h3>
        <h3>년도 | 2009</h3>
      </div>
    </div>
  );
}

export default DetailInfo;
