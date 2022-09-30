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
    'Marc'
  ];
  
  const finderName = (array, name) => {  //dos parametros para esta funcion, uno el array y otro el elemento a buscar, en este caso name
      if (array.includes(name)) {
        return ("true" + array.indexof(name)); 
      } else {
        return ("false");
      }
  
}
  console.log(finderName(nameFinder, "Steve"));