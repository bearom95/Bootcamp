import React from "react";

export const Card = (props) => {
  const { character } = props;
  /*   character es la caja, acabo de hacer un destructuring de props para acceder a character
  props es un objeto vacio y le pasamos los valores que queramos, es ocmo los parametros. 
  cuando llamamos a la funcion le ponemos que esos parametros son igual al valor que queramos. Por ejemplo:
  componente imagen tiene source y alternative, eso tendrá por parámetros la funcion, al llamar en el name a la imagen
  pondremos ademas: src-"..." alterative="....". Así podemos usar el componenete imagen todas las veces que queramos
  pasandole la info que queramos en cada momento.  */

  return (
    <div>
      <h2>id: {character.id}</h2>
      <h3>name: {character.name}</h3>
      <p>status: {character.status}</p>
    </div>
  );
};
