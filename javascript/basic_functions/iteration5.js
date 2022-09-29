//Iteracion 5 Calcular promedio de strings

/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const averageWord = (param) => {
  let suma = 0;   //estoy iniciando un contador a 0, y despues de toda la funcion, con el return le pido que me diga como ha quedado
  for (let element of param) {
    if (typeof(element) == "number") {     
        suma = suma + element
    }
    else if (typeof(element) == "string") {
        suma = suma + element.length;
    }
  }
  console.log(suma);
  return suma;
} 

console.log(averageWord(mixedElements));