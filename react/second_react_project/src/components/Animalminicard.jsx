import React from "react";
import "./Animalminicard.css";

//aqui el parametro es element, que en la llamada a esta minicard, ya igualamos a animal, el objeto entero
export const Animalminicard = ({ animal }) => {
  return (
    <div className="Animalminicard">
      <h2>{animal.name}</h2>
      <img src={animal.image_link} alt={animal.name} />
    </div>
  );
};
