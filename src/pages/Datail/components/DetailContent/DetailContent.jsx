import React from "react";
import { DetailInfo, DetailYoutube, DetailSheet } from "../../components";
import { CloseOutlined } from "@ant-design/icons";
import "./DetailContent.css";

function DetailContent({ goBack }) {
  const handleClose = () => {
    goBack();
  };
  return (
    <section id="detail-content">
      <div className="close">
        <CloseOutlined onClick={handleClose} />
      </div>
      <DetailInfo />
      <DetailYoutube />
      <DetailSheet />
    </section>
  );
}

export default DetailContent;
