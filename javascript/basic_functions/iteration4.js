// Iteracion 4 Calcular el promedio

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];


const average = (param) => {
  let totalSuma = 0;
  for (let number of param) {
    totalSuma = totalSuma + number     //vete sumandolos y luego divide por su longitud
  }
  
  let media = totalSuma/param.length
  return media;
}

let myAverage = average(numbers);   //lo guardo en una variable para luego poder reutilizarlo si lo necesito
console.log(myAverage);






