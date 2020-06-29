import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './MainSearch.css';

function MainSearch() {
  let searchValue = '';

  const handleSubmit = e => {
    e.preventDefault();
    window.location.href += `search?value=${searchValue}`
  };

  const handleChange = e => {
    searchValue = e.target.value;
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <span className="bar"></span>
        <label>이번주 찬양을 검색해보세요.</label>
        <button>
          <SearchOutlined style={{ color: '#eee', fontSize: '30px' }} />
        </button>
      </form>
    </div>
  );
}

export default MainSearch;
