import React from "react";
import { YoutubeOutlined, CustomerServiceFilled } from "@ant-design/icons";
import "./SheetItem.css";

function SheetItem() {
  return (
    <div className="sheet-item">
      <div className="content column-center">
        <h1>찬양의 제사 드리며</h1>
        <h2>마커스 워십</h2>
      </div>
      <div className="info-bottom">
        <YoutubeOutlined style={{ color: "#BC2424" }} />
        <CustomerServiceFilled style={{ color: "#A84E19" }} />
      </div>
    </div>
  );
}

export default SheetItem;
