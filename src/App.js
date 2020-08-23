import React from "react";
// import Search from "./pages/Search";
import { Main, Search } from "pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
