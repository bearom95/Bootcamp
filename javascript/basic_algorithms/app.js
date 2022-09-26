// Iteración 1 Variables
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;


// Iteración 2 Variables Avanzadas
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
 

let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.")


const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);


let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000}; 

globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log(car1.finalPrice);
console.log(car2.finalPrice);


// Iteración 3 Operadores
console.log(10*5);
console.log(10/2);
console.log(15%9);
let p = 10;
let j = 5;
let o = p + j;
console.log(o);

let c = 10;
let m = 5;
let i = c * m;
console.log(i);


// Iteración 4 Arrays
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

avengers[0]= "IRONMAN";
console.log(avengers);

console.log(avengers.length);


const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);    // Imprimo para comprobar que está bien el nuevo array
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);


const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0]);
console.log(rickAndMortyCharacters2[rickAndMortyCharacters.length-1]);

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1, 1);
console.log(rickAndMortyCharacters3);
// Para este último ejercicio hemos usado .splice()
// .splice sirve para borrar algun elemento del array y poner otro en su lugar
// tiene 3 parametros .splice(index donde inicias el cambio, nº de elementos que eliminas, el valor por el que sustituyes el eliminado)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice 