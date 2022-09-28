// Iteración 6 Bucles

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Sacar solo los números pares
for (let i = 0; i < 10; i++) {
    if (i%2 == 0){
    console.log(i);
    }
}

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.*/

for (let i = 0; i < 10; i++){
    if (i < 9){
        console.log("Intentando dormir");
    } else if (i == 9){
        console.log("Dormido!");
    }
   
}