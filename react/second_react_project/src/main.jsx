import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import "./index.css";

//IMPORT PAGES
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { Notfound } from "./pages/Notfound";

//EN EL FICHERO MAIN HAY QUE DEFINIR EL COMPONENTE BROWSERROUTER, QUE
//CONTIENE TODOS LOS COMPONENTES QUE FORMAN EL MAPA DE RUTAS
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="animals" element={<Animals />} />
          <Route path="animals/:id" element={<Animal />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  //las rutas aqui definidas son lo que se pinta en el Outlet
);

/* las rutas hijas con index element son rutas sin path que se renderizarán sobre el componente Outlet
del elemento padre al acceder a su URL, la del padre 
si el path coincide con la URL actual renderizará el element.*/
