import React from "react";
import "./DetailSheet.css";
import AOS from "aos"

function DetailSheet() {
  AOS.init();
  return (
    <div id="detail-sheet">
      <div className="control-pannel" >control pannel</div>
      <div className="sheet">
        <img src="/asset/images/찬양의제사드리며musicsheet.jpeg" alt="sheet"/>
      </div>
    </div>
  );
}

export default DetailSheet;
