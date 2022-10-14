/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y 
devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como 
parametro. Haz varios ejemplos y compruebalos.
 */

const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (let element of array) {
        if (text == element ) {
           return array.indexOf(element);
    }
}}

console.log(findArrayIndex(animals, "Salamandra"));
console.log(findArrayIndex(animals, "Caracol"));