import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './MainSearch.css';

function MainSearch() {
  const handleSubmit = e => {
    e.preventDefault();
    alert("준비중입니다.");
  };

  const handleChange = e => {};

  return (
    <div className="main">
      {/* <h1>이번주 찬양을 검색해보세요.</h1> */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <span class="bar"></span>
        <label>이번주 찬양을 검색해보세요.</label>
        <button><SearchOutlined style={{color: '#eee', fontSize: '30px'}} /></button>
      </form>
    </div>
  );
}

export default MainSearch;
