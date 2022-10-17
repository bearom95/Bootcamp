/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */
const getData = async () => {
  try {
    const data = await fetch(`https://api.agify.io?name=michael`);
    const dataJSON = await data.json();
    console.log(dataJSON);
  } catch (error) {
    console.log("Error:", error);
  }
};
getData();

/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/
//const baseUrl = 'https://api.nationalize.io';

const getData2 = async (name) => {
  const response = await fetch(`https://api.nationalize.io?name=${name}`);
  const data = await response.json();
  console.log(data);
};

const clickEvent = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    const input = document.querySelector("input").value; //si escribo Ana, le pasa este nombre por parametro al fetch
    getData2(input);
  });
};
clickEvent();

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */
const ul = document.createElement("ul");
document.body.appendChild(ul);

const getData3 = async (name) => {
  try {
    const response = await fetch(`https://api.nationalize.io?name=${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

let printdata = (info) => {
  info.country.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
       <p>El nombre ${info.name} tiene una probabilidad del ${
      element.probability * 100
    }% de ser de ${element.country_id}</p>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", () => {
      //si no pongo llaves estaría retornando. La arrow retorna cosas
      li.remove();
    });
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  });
};

const clickEvent2 = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", async () => {
    const input = document.querySelector("input").value; //si escribo Ana, le pasa este nombre por parametro al fetch
    const dataToPrint = await getData3(input);
    printdata(dataToPrint);
  });
};
clickEvent2();

/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */
