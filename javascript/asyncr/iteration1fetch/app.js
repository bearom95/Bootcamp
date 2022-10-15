/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */
/* const getData = async () => {
    try {
      const data = await fetch(`https://api.agify.io?name=michael`);
      const dataJSON = await data.json();
      console.log(dataJSON);
    } catch (error) {
      console.log("Error:", error);
    }
  };
getData();  */


/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/
//const baseUrl = 'https://api.nationalize.io'; 

/* 
const getData2 = async (name) => {
    const response = await fetch(`https://api.nationalize.io?name=${name}`)
    const data = await response.json()
    console.log(data)
  }
  
  const clickEvent =()=>{
      const button = document.querySelector('button')
      button.addEventListener ('click', () => {
        const input = document.querySelector('input').value    //si escribo Ana, le pasa este nombre por parametro al fetch
        getData2(input)
      })
  }
  clickEvent() */


/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */
const ul = document.createElement("ul");
document.body.appendChild(ul);

const getData3 = async (name) => {
    try {
        const response = await fetch(`https://api.nationalize.io?name=${name}`)
        const data = await response.json()
    printdata(data)
    } catch (error) {
        console.log(error);
    }
  };

 let printdata = (array) => {
    array.forEach(element => {
       const li = document.createElement("li")
       ul.appendChild(li)
       li.innerText = `El nombre ${element.name} tiene ${element.country[0].probability} de ser de ${element.country[0].country_id}`
    });
 }

 const clickEvent2 =()=>{
    const button = document.querySelector('button')
    button.addEventListener ('click', () => {
      const input = document.querySelector('input').value    //si escribo Ana, le pasa este nombre por parametro al fetch
      getData3(input)
    })
}
clickEvent2()







/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */