import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getMushrooms } from '../API/api.js';

export const Gallery = () => {
  const [mushrooms, setMushrooms] = useState([]); //mushrooms es un array vacio
  const [filter, setFilter] = useState(''); //filter de primeras está vacío pero cada vez que metemos una letra en el input su estado se resetea y React lo renderiza

  useEffect(() => {
    //segun se carga Gallery se ejecuta este useEffect que nos carga los datos y escucha a FILTER por si cambia volver a renderizarse
    loadingData();
  }, [filter]);

  const loadingData = () => {
    //esta funcion tiene la condicion de que si filter está a 0 muestre todas las setas, si no que muestre la seta filtrada
    if (filter === '') {
      getMushrooms().then((dataToJson) => {
        setMushrooms(dataToJson);
      });
    } else {
      //filteredMush es el nombre ya filtrado, se hace que setMushrooms se iguale a esa seta filtrada y que solo muestre esa
      const filteredMush = filtered('common', mushrooms);
      setMushrooms(filteredMush);
    }
  };
  //filtered es cualquier nombre que incluya lo que se mete en FILTER en mayusculas y minusculas
  const filtered = (common, list) => {
    return list.filter((element) =>
      element[common].toLowerCase().includes(filter.toLowerCase()),
    );
  };
  //cuando metemos alguna letra en el input filter se setea con ella y su estado cambia
  //ponemos el link a "./mush.id" porque parte de donde estamos, gallery, no hace falta poner gallery de nuevo
  return (
    <>
      <div>
        <input type="text" onChange={(ev) => setFilter(ev.target.value)} />
      </div>
      <div className="mushgallery">
        {mushrooms.map((mushroom) => (
          <Link to={`./${mushroom.id}`} key={mushroom.id}>
            <section>
              <h1>{mushroom.common}</h1>
              <img src={mushroom.image} alt={mushroom.common} />
            </section>
          </Link>
        ))}
      </div>
    </>
  );
};
