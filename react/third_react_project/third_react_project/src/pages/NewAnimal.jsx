import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState } from "react";

const createAnimal = (ev, name) => {
  ev.preventDefault();

  const animal = {
    name: name,
    id: uuidv4(),
  };
  console.log(animal);
  postAnimal(animal);
};

const postAnimal = async (item) => {
  axios({
    method: "post",
    url: "http://localhost:8080/animals",
    data: item,
  });
};

export const NewAnimal = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <div>
      <h1>This is the form to add new animals</h1>
      <form onSubmit={(ev) => createAnimal(ev, name)}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" onChange={(ev) => setName(ev.target.value)} />
          <label htmlFor="image">Image url</label>
          <input type="text" onChange={(ev) => setImage(ev.target.value)} />
        </fieldset>
        <input type="submit" value="Create" />
      </form>
      <p>
        preview: NAME:{name} IMAGE URL: {image}
      </p>
    </div>
  );
};
