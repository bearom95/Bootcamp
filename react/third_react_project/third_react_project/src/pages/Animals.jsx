//esta es la pagina que cuando aparezca tendrá todos los animales
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Animals.css";

export const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    //useEffect tiene dos parametros, el efecto que causa junto al renderizado, y el array de dependencias
    //en este caso busca los datos en la api y setea con los datos encontrados
    const getAnimals = async () => {
      const data = await fetch("http://localhost:8080/animals");
      const dataToJson = await data.json();
      setAnimals(dataToJson);
    };

    getAnimals();
  }, []);

  /* const deleteminicard = (id del animal) y se ejecuta cuando clik en el boton de delete */

  return (
    <div className="animalsLayout">
      <h2>All the beautiful animals</h2>
      <>
        {animals.map((animal) => (
          <div className="animalminicard" key={animal.id}>
            <Link to={`/animals/${animal.id}`}>
              <h1>{animal.name}</h1>
            </Link>
            <img src={animal.image_link} alt={animal.name} />
            {/* <button on></button> */}
          </div>
        ))}
      </>
    </div>
  );
};
