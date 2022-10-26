import React from "react";
import "./App.css";
/* import { Card } from "../components/Card"; */ //Ya no, porque ahora invocamos a CharacterList, que contiene a Card
import { CharacterList } from "../components/CharacterList";

//app se compone del
export const App = () => {
  return <CharacterList />;
};

//solo puede haber un export default por archivo, es como el que escupe el archivo y el
//otro que lo lee no tiene que escarbar, por eso donde lo importamos lo ponemos entre llaves al componente
