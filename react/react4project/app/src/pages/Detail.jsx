import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMushroom } from '../API/api';

export const Detail = () => {
  const [mushroom, setMushroom] = useState({}); //mushroom es un objeto vacío
  const { id } = useParams();

  useEffect(() => {
    //la respuesta de getMushroom pasando por parametro el id es con lo que seteamos mushroom.
    getMushroom(id).then((response) => {
      setMushroom(response);
    });
  }, []);

  return (
    <section>
      <h1>{mushroom.common}</h1>
      <h2>{mushroom.latin}</h2>
      <img src={mushroom.image} alt={mushroom.latin} />
      <p>Confused with: {mushroom.confusedWith}</p>
      <p>Regions: {mushroom.regions}</p>
      <p>Habitat: {mushroom.habitat}</p>
      <p>Psychoactive: {mushroom.psychoactive == true ? 'Yes' : 'No'}</p>
      <p>Poisonous: {mushroom.poisonous == true ? 'Yes' : 'No'}</p>
      <p>Deadly: {mushroom.deadly == true ? 'Yes' : 'No'}</p>
    </section>
  );
};
