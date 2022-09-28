// Iteración 1 Buscando el máximo

//Completa la función que tomando dos números como argumento devuelva el más alto. 

function printHigherNumber(numberOne , numberTwo) {
  let higherNumber = (numberOne > numberTwo) ? numberOne : numberTwo;
  console.log(higherNumber);
  return higherNumber
}

printHigherNumber(5, 3);  // para comprobar si funciona