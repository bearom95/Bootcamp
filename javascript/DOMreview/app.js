/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; 

const app = document.querySelector("body");
const ul = document.createElement("ul");
app.appendChild(ul);
for (let country of countries) {
    ul.innerHTML += `
        <li>${country}</li>
    `
}

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const elementToRemove = document.querySelector(".fn-remove-me");
elementToRemove.remove(); 


/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; 

const divPrintHere = document.querySelector('[data-function="printHere"]');
const ul2 = document.createElement("ul");
divPrintHere.appendChild(ul2);
for (let car of cars) {
    ul2.innerHTML += `
        <li>${car}</li>
    `
}

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 

const listOfDivs = document.createElement("ul");
app.appendChild(listOfDivs);
for (let country of countries2) {
    listOfDivs.innerHTML += `
    <li>
        <div id="div-fotos">
            <h4>${country.title}</h4>
            <img src=${country.imgUrl}/>
        </div>
    </li>`
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */
const btnRemover = document.createElement("button");
app.appendChild(btnRemover);
btnRemover.addEventListener("click", ()=>listOfDivs.removeChild(listOfDivs.lastChild));


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.
 */

//seleccionamos todos los lis, y el array resultante lo recorremos, creando un boton para cada li y haciendo
//que con cada click se elimine al padre (o sea, cada li entero) El botón se inmola
const elements = document.querySelectorAll("li")
for (let element of elements) {
    const indivBtn = document.createElement("button");
    indivBtn.textContent="Remove my li";
    element.appendChild(indivBtn);
    indivBtn.addEventListener("click", () => indivBtn.parentNode.remove());
}


