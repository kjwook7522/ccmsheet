import React from "react";
import { DownloadOutlined, ToTopOutlined, SelectOutlined } from "@ant-design/icons";
import "./DetailSheet.css";

function DetailSheet() {
  return (
    <div id="detail-sheet">
      <div className="control-pannel">
        <span>
          <DownloadOutlined />
          다운로드
        </span>
        <span>
          <ToTopOutlined />
          공유
        </span>
        <span>
          <SelectOutlined />
          보관함
        </span>
      </div>
      <div className="sheet">
        <img src="/asset/images/찬양의제사드리며musicsheet.jpeg" alt="sheet" />
      </div>
    </div>
  );
}

export default DetailSheet;
