import { useParams, useNavigate } from "react-router-dom"; //porque debo recuperar el id de cada animal
import { getAnimal } from "../../data";
import { Title } from "../components/Title";
import { Image } from "../components/Image";
import "./Animal.css";

export const Animal = () => {
  const params = useParams();
  const navigate = useNavigate();
  const animal = getAnimal(params.id);

  /*   useParams se usa para conocer los parámetros de nuestras rutas.
  params es un objeto con una clave, esta clave sale de la URL con una variable dinámica. Por eso cuando queremos hablar del id
  tenemos que poner params.id (es decir, el objeto params, su clave id, que es igual al id de la nabegacion)
  */
  return (
    <div className="animaldiv">
      <Title text={animal.name} />
      <h2>{animal.latin_name}</h2>
      {/*  <img src={animal.image_link} alt={animal.name} />  //si no componetizase*/}
      <Image src={animal.image_link} alt={animal.name} />
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
