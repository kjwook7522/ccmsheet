import React from "react";
import { SheetItem } from "common/components";
import "./SearchList.css";

function SearchList({ search, itemList }) {
  const test = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
  return (
    <div id="search-list">
      <div className="header">
        <h1>"{search}"(으)로 검색한 결과입니다.</h1>
      </div>
      <div className="list">
        {test.map(() => (
          <SheetItem />
        ))}
      </div>
    </div>
  );
}

export default SearchList;
