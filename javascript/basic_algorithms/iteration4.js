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