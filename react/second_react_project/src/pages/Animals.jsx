import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getAnimals } from "../../data";
import { Animalminicard } from "../components/Animalminicard";
import { Title } from "../components/Title";

export const Animals = () => {
  const animals = getAnimals();
  //Tambien podriamos haber hecho el map al estado, poniendo:
  //const [animals, setAnimals] = useState(animals) este animals del useState es el array de data.js

  return (
    <>
      <div>
        <Title text={"All the beautiful and wild animals"} />
        <ul>
          {animals.map((animal) => (
            <li key={animal.id}>
              <Link to={`/animals/${animal.id}`}>
                <Animalminicard animal={animal} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
