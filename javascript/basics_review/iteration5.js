/* Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos
 que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la 
 función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre 
 como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript Math.random(); */


 //math.random te da un nº entre 0 y 1, multiplicado por las caras que sean nos dará un número, decimal, que el floor
 //lo redondea a la baja, como mucho nos dará 7.9, le sumamos 1 para que el 8 también se incluya

 const rollDice = (sides) => {
    const rand = Math.floor(Math.random() * sides) + 1;   
    return rand
 }

 console.log(rollDice(8));