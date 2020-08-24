import React from "react";
import { Main, Search, Detail } from "pages";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AOS from "aos";
import "./App.css";

function App() {
  AOS.init();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Route path="/detail/:id" component={Detail} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
