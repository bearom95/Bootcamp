import { useState } from "react";
import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Wild Animals</h1>
      </header>
      <div>
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="animals">Animals</NavLink>
          {/* <NavLink to="animal">Animal</NavLink> */}
          {/* <NavLink to="notfound">Not found</NavLink> */}
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
