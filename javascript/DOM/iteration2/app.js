// Iteracion 2 Modificando el DOM

//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let divVacio = document.createElement("div"); 
document.body.appendChild(divVacio);
//divVacio.innerHTML = "Hola"; si quisiera meterle texto a ese div
console.log(divVacio);
//Para insertar elementos: appendChind al padre o innerHTML 

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divP = document.createElement("div");
let parrafo = document.createElement("p");
document.body.appendChild(divP);
divP.appendChild(parrafo);
console.log(divP);
//OTRA OPCIÓN: Crear el primer div y luego hacer su innerHTML para meterle el párrafo en vez de crear el P e insertarselo al div
//divP.innerHTML = `<p>....</p>`
//console.log(divP);


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let divSixP = document.createElement("div");
document.body.appendChild(divSixP);
for (var i=0; i<6; i++) {
    divSixP.innerHTML += `<p> ${i+1} Párrafo </p>`;
}
console.log(divSixP);
//Creo un div que inserto en el body y con un for indicando los limites (6) le digo que añada P 6 veces, acumulando, como innerHTML del div

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let soyDinamico = document.createElement("p");
document.body.appendChild(soyDinamico);
soyDinamico.innerHTML = "Soy Dinámico!";
console.log(soyDinamico);


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let wubba = document.createTextNode('Wubba Lubba dub dub');
let h2 = document.querySelector(".fn-insert-here");
h2.appendChild(wubba);
console.log(h2);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement("ul");        //creo un ul y se lo añado a body
document.body.appendChild(ul);     
for (let app of apps) {                       //en cada vuelta crea un elemento li, al que le añades como innerHTML cada app
    let li = document.createElement("li");
    li.innerHTML = app;
    ul.appendChild(li);                       //UNa vez creado y añadido dentro lo que queremos, se lo agregamos a ul
}
console.log(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me  
const erase = document.querySelectorAll(".fn-remove-me");        //nos está dando un array
for (const iterator of erase) {                                  //por cada elemento del array, lo eliminas
    iterator.remove()
} 
console.log(erase);


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.   adjacent afterend
let pInBtwn = document.createElement("p");
pInBtwn.innerHTML = `Voy en medio!`
let div1 = document.querySelector("div")
div1.insertAdjacentElement('afterend', pInBtwn);
//Tambien podríamos en el 2nd parametro de insertAdj... meterle directamente la p con su texto
//así nos ahorraríamos crearla y hacer su innerHTML

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
const arrayOfInsert = document.querySelector(".fn-insert-here");
for (let element of arrayOfInsert) {
    element.innerHTML = `<p>Voy dentro!</p>`
}
//saco un array con todos los elementos que tienen fn-insert-here y por cada uno, hago que su innerHTML sea p,voydentro
