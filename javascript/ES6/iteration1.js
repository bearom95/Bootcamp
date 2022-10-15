//ARROWS

/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros */

const suma = (a=10, b=5) => {    //cuando en la propia definicion, al parametro le das valor, es el valor por defecto
    console.log(a + b);
}
    suma();
    suma(2);             //para cambiar solo el 2º parametro
    suma(undefined, 2);  //para cambiar solo el 1º parametro y conservar el 2nº por defecto
    suma(null, 2);       //para hacer que el primero sea cero, solo tiene en cuenta el nº 2
    suma(2, 3);