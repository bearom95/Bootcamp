import React from "react"; //importacion React ya que todos los archivos JSX deben contenerlo
import ReactDOM from "react-dom/client"; //inyecta toda nuestra aplicacion en el index.html
import { App } from "./App"; //el componente principal de la aplicacion
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//coge el div de root y unir el HTML con el componente principal App
//App es como el nuevo main, pero ya estamos renderizando un componente de base
//le inyectamos al div root el componente App

//las keys las ponemos cuando generamos varios elementos de lo mismo. Para que el navegador no se lie le decimos que cada elemento de esos tiene su propio codigo
//la key se le pone al elemento padre. Si queremos generar una key unica podemos hacer que la key=objeto.stringyfy porque eso si que va a ser super unico
