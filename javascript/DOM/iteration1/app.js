//Iteración 1 Interaccion con el DOM

/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */
let btn = document.querySelector(".showme");  //creamos una variable donde alojamos el valor para luego reusarlo
console.log(btn);


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
// Con GET ELEMENT BY ID
let header1 = document.getElementById("pillado");
console.log(header1);
// Con QUERY SELECTOR
let head1 = document.querySelector("h1#pillado");    //también podría ponerle solo #pillado porque el ID es único
console.log(head1);


// 1.3 Usa querySelector para mostrar por consola todos los p
let paragraph = document.querySelectorAll("p");
console.log(paragraph);


//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);


//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".  
let allCharacters = document.querySelectorAll("[data-function]");   //Los selectores de atributos se ponen entre corchetes
console.log(allCharacters);


//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".  
let spansArray = document.querySelectorAll("[data-function]"); //me da un array con las etiquetas de HTML
let thirdCharacter = spansArray[2].innerHTML;
    console.log(thirdCharacter);
//Tengo que acceder al 3rd elemento del array, le pongo innerHTML para que me devuelva solo el nombre

