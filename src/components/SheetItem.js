import React from 'react';
import { YoutubeOutlined, CustomerServiceFilled } from '@ant-design/icons';
import { message } from 'antd';
import './SheetItem.css';

function SheetItem() {
  const popupItem = () => {
    message.warning('아직 준비중 입니다.');
  }

  return (
    <div className="sheet-item" onClick={popupItem}>
      <div className="sheet-item-content">
        <h1>찬양의 제사 드리며</h1>
        <h2>마커스</h2>
        <div className="wrapper-album"></div>
      </div>
      <div className="sheet-item-bottom"><YoutubeOutlined style={{color: '#BC2424'}} /><CustomerServiceFilled style={{color: '#A84E19'}} /></div>
    </div>
  );
}

export default SheetItem;
