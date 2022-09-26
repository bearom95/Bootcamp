// Dependiendo de una condicion, nuestro codigo se ejecuta o no
// Los condicionales nos permiten crear varios caminos

let user = false;

function isLogged(user) { 
 if (typeof user !== "string") {
   console.log("Debes tener un nombre");
 } else if (user) {           
    console.log("Bienvenido " + user); 
 } else {
    console.log("Debes iniciar sesion");
 }
}

isLogged("Pepe");
isLogged();
isLogged(5);
isLogged(0); // El cero pasa como si no hubiera nada (o false), nos dirá que debemos iniciar sesion


