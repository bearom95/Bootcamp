import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Animal.css";

//useParams para recuperar el id de cada animal (de la barra de navegacion) y poder abrir su tarjetita
export const Animal = () => {
  const [animal, setAnimal] = useState({});
  //animal es un objeto vacío que despues del fetch que lanza useEffect se setea con la info recuperada de la api
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getAnimal = async () => {
      const data = await fetch(`http://localhost:8080/animals/${id}`);
      const response = await data.json();
      setAnimal(response);
    };
    getAnimal();
  }, []);

  return (
    <div className="animaldiv">
      <h1>{animal.name}</h1>
      <h2>{animal.latin_name}</h2>
      {/*  <img src={animal.image_link} alt={animal.name} />  //si no componetizase*/}
      <img src={animal.image_link} alt={animal.name} />
      <div>
        <p>Type: {animal.animal_type}</p>
        <p>Activity: {animal.active_time}</p>
        <p>
          Length- min: {animal.length_min}, max: {animal.length_max}
        </p>
        <p>
          Weight- min: {animal.weight_min}, max: {animal.weight_min}
        </p>
        <p>Lifespan: {animal.lifespan}</p>
        <p>Habitat: {animal.habitat}</p>
        <p>Diet: {animal.diet}</p>
      </div>
    </div>
  );
};
