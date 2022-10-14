/* Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como 
parametro. Retorna el array resultante. */

const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']


let newArray = [];
const swap = (array, fisrtindex, secondindex) => {
    for (let element of array) {
        if (element !== array[fisrtindex] && element !== array[secondindex]) {
            newArray.push(element)
        } else if(element == array[fisrtindex]) {
            newArray.push(array[secondindex])
        } else if (element == array[secondindex]) {
            newArray.push(array[fisrtindex])
        }
    }
    return newArray
} 

console.log(swap(players, 0, 3));


/* const swap2 = (array, firstindex) => {
    console.log(array[firstindex])
}

swap2(players, 3)  esto nos da el ultimo nombre: Ronalguiño
 */