import React from 'react';
import Nav  from './components/Nav'
import MainSearch from './components/MainSearch'
import { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <Nav />
      <MainSearch />
      <div className="bg">
        <div className="wrapper"></div>
      </div>
    </Fragment>
  );
}

export default App;
