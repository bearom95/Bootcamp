// Iteracion 8 Contador de repeticiones

/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras 
que lo conforma.  Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code',
  ];

const repeatCounter = (array) => {       
    let contadorTotal = new Object();   //declaro una nueva variable que será un objeto donde 
    for (let element of array) {        //las claves son las palabras y los valores las veces que aparece
        if (contadorTotal[element] == null) {    //si el valor no existe, 
        contadorTotal[element] = 1               //lo inicializamos en 1
        }
        else {                                   //Si ya tiene un valor le vamos sumando 1 a cada vuelta
            contadorTotal[element] = contadorTotal[element] + 1;
        }
    }
     console.log(contadorTotal);
  }

  repeatCounter(counterWords);
  