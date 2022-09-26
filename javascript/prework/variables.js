// Variable es una caja en la cual puedo almacenar cualquier dato.

// Declarar una variable

var name; // variable sin inicializar. Undefined -- no tiene valor
console.log(name);

var surname = "Rosales"; // aquí sí que hemos definido la variable
console.log(surname);

// NO VAMOS A USAR VAR NUNCA MAS, USAREMOS LET O CONST

let age = 34;
console.log(age); 

const birthdate = "15/03/1995";   // con las CONST no se pueden reasignar, nos dará un error
console.log(birthdate);

birthdate = "15/03/2000";
console.log(birthdate); // aquí nos da un error porque le estamos intentando reasignar un nuevo valor a una const que ya estaba con un valor previo





