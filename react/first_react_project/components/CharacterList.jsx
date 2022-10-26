import React from "react";
import { Card } from "./Card";

//Componente CharacterList y Funcion con la que se puede cambiar su estado setCharacterList
export const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  //aquí lo que decimos es que la funcion CharacterList nos va a devolver un mapeo de los characters
  // y usará tambien otro componente mas especifico que se llama Card, el cual necesita como
  //parámetro o prop el personaje

  //quien da la funcionalidad a los componentes es el padre, luego el subcomponente solo pinta cosas
  //quien tiene almacenada la info es el padre y se lo pasa por parametro al hijo

  return (
    <>
      {characterList.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </>
  );
};

//el fragment no lo usaremos en un mapeo

/* typescript, styled components, react y testing, Vite, NextJS --> lo que aprender después del bootcamp */
