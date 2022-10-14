// Iteracion 7 Buscador de nombres

/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe 
dentro de dicho array - comprueba si existe el elemento, en caso que existan
 nos devuelve un true y la posición de dicho elemento y por la contra un false. */

 const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc',
  ];
  

  const finderName2 = (array, name) => {
    let acumulador = "";  //dos parametros para esta funcion, uno el array y otro el elemento a buscar, en este caso name
    for (let element of array) {      //para todos los elementos del array
      if (name == element){           //el nombre que busco coincide con algun elemento??
        acumulador = acumulador + element 
      } 
    }

    if (acumulador.length < 1){
      console.log("Falso, " + name + " no está en la lista");
    } else {
      console.log(`Verdadero, ${name} tiene el puesto ${array.indexOf(acumulador)+1} en la lista`) //Le sumo 1 para que me de la posicion en lenguaje humano
    }
}

    //Comprobación de que funciona
    finderName2(nameFinder, "Marc");

    //PODRIAMOS HACERLO TAMBIEN CON INCLUDES. if array.includes(`${name}`) ME PROPONGO HACERLO MAS SIMPLE
