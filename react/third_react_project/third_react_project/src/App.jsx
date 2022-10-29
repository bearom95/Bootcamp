//en este archivo App definimos nuestra estructura y ponemos el Outlet, que es la puerta de entrada a las paginas
//cuando cambiemos de pagina, es aqui donde se reflejará

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <header>Animals header</header>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
