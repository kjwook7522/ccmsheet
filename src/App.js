import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Nav from './components/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    if (window.location.pathname === '/search') {
      document.querySelector('.wrapper').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      document.querySelector('.wrapper').style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </BrowserRouter>

      <div className="bg">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default App;
