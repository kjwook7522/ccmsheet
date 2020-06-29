import React from 'react';
import './Nav.css';
import { message } from 'antd';

function Nav() {
  const warning = () => {
    message.warning('아직 준비중 입니다.');
  };

  return (
    <div className="nav">
      <div className="left">
        <a href="/"><h1><span style={{color: '#ccc'}}>이번주</span> 찬양</h1></a>
      </div>
      <div className="right">
        <button onClick={warning}>로그인</button>
      </div>
    </div>
  );
}

export default Nav;
