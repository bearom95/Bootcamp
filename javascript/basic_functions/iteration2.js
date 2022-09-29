// Iteración 2 Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

// OPCION 1 USANDO FUNCTION Y FOR TRADICIONAL
  // declaro una variable y la inicializo vacía, con un length muy pequeño. 
  // En ella se almacenarán los nuevos valores que la van sustituyendo segun va recorriendo el array  

function findLongestWord(arrayToCheck) {
    let longestWord = " ";   
        for (let i = 0; i < arrayToCheck.length; i++) {      //recorro todo el array
            if (arrayToCheck[i].length > longestWord.length) {
                longestWord = arrayToCheck[i];   
    }
  }     return longestWord;
}

console.log(findLongestWord(avengers)); 


//OPCION 2 USANDO ARROW Y FOR OF Y ADEMAS ALMACENANDO TODO EN UN RESULTADO
const findLongestWord2 = (array) => {
  let longestWord = " ";
  for (const item of array){
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  } 
  return longestWord;
} 
const result = findLongestWord(avengers);
console.log(result);