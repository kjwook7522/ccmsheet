import React from "react";
import { useState, createRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchSearch.css";

function SearchSearch({ replace }) {
  const [search, setSearch] = useState("");
  const inputRef = createRef();

  const handleInput = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    inputRef.current.value = "";
    replace("/search", { search });
  };

  return (
    <section id="search-search">
      <form onSubmit={handleSubmit} className="search-form">
        <input ref={inputRef} type="text" placeholder="검색어를 입력해주세요" onChange={handleInput} />
        <button>
          <SearchOutlined />
        </button>
      </form>
    </section>
  );
}

export default SearchSearch;
