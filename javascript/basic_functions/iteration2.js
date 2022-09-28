// Iteración 2 Buscar la palabra más larga

//Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//en caso de que dos strings tengan la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(arrayToCheck) {
    let longestWord = " ";   
    // declaro una variable y la inicializo vacía, con un length muy pequeño. 
    // En ella se almacenarán los nuevos valores que la van sustituyendo segun va recorriendo el array   
        for (let i = 0; i < arrayToCheck.length; i++) {      //recorro todo el array
            if (arrayToCheck[i].length > longestWord.length) {
                longestWord = arrayToCheck[i];
            
    }
  }     return longestWord;
}

console.log(findLongestWord(avengers));

// no lo entiendo bien :(