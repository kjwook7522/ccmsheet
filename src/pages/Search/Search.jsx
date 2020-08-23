import React from "react";
import { Nav } from "common/components";
import { SearchSearch, SearchList } from "./components";
import "./Search.css";

function Search({ history, location }) {
  return (
    <div id="search">
      <Nav />
      <SearchSearch replace={history.replace} />
      <SearchList search={location.state?.search} itemList={{}} />
    </div>
  );
}

export default Search;
