import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="container border-b border-gray-400">
        <div
          className="flex items-center justify-between"
        >
          <img
            src={logo}
            className="w-20"
            alt="logo"
          />
          <div
            className="flex"
          >
            <Link
              className="mr-2"
              to="/counter"
            >
              Counter
            </Link>
            <Link to="/todos">
              To-dos
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
