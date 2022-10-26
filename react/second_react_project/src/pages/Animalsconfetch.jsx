/* import React, { useEffect, useState } from "react";
import { Animalminicard } from "../components/Animalminicard";
import { Animal } from "./Animal"; */

export const Animals = () => {
  //animals es una variable de estado, que de primeras es un array vacío
  const [animals, setAnimals] = useState([]);
  //con el useEffect se llena de lo que nos devuelve el fetch, porque useEffect es el efecto secundario de llamar a Animals
  //Animals nos pinta HTML y nos hace el fetch

  useEffect(() => {
    (async () => {
      let data = await fetch(
        "https://zoo-animal-api.herokuapp.com/animals/rand/10"
      ).then((response) => response.json());

      setAnimals(data); //cambiamos el estado de animals, de vacio a lleno con lo de la api, y ya está listo
      // para hacer el mappeo y luego pintar el HTML
      //recupero info y la seteo en una variable
    })();
  }, []);

  return (
    //animals, su estado ahora es data, el array devuelto por la api
    <>
      {animals.map((animal) => (
        <Animalminicard key={animal.id} element={animal} /> //el elemento es el objeto entero de cada animal
      ))}
    </>
  );
};

//element es lo que le pasamos a la funcion como parámetro, porque dentro tiene animal
