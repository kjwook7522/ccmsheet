import React from "react";
import { SheetItem } from "common/components";
import { Link } from "react-router-dom";
import "./SearchList.css";

function SearchList({ search, itemList }) {
  const test = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
  return (
    <section id="search-list">
      <div className="header">
        <h1>"{search}"(으)로 검색한 결과입니다.</h1>
      </div>
      <div className="list">
        {test.map(() => (
          <Link to="/detail/1"><SheetItem /></Link>
        ))}
      </div>
    </section>
  );
}

export default SearchList;
