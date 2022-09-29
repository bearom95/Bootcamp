// Iteracion 6 Valores únicos

/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. 
Puedes usar este array para probar tu función: */


const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

let removeDuplicates = (param) => {
    let newArrayWithoutDuplicated = []; //le estoy indicando que la nueva variable tendrá forma de array. Si necesitase que tuviera forma de string ponemos " " y si necesitamos forma de número un cero.
    for (let element of param) {
        if (newArrayWithoutDuplicated.includes(element)==false) {
            newArrayWithoutDuplicated.push(element); 
        } 
    }
    return newArrayWithoutDuplicated;
}
        

  console.log(removeDuplicates(duplicates));