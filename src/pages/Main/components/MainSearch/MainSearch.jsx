import React from "react";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./MainSearch.css";

function MainSearch({ push }) {
  const [search, setSearch] = useState("");

  const handleInput = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    push("/search", { search });
  };

  return (
    <section id="main-search">
      <form className="saerch-form column-center" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <label>이번주 찬양을 검색해보세요.</label>
        <button>
          <SearchOutlined />
        </button>
      </form>
    </section>
  );
}

export default MainSearch;
