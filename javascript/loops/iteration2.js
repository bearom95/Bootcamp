// Iteración 2 Condicionales avanzados

/* Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved 
a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.  */

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
//el primer objeto del array es alumns[0]   console.log(alumns[0].T1); --> te da true o false 

alumns.forEach((alumn) => {     //alumn es el elmento del array, que es un objeto
    alumn.isApproved = true;
    if (alumn.T1 == false && alumn.T2 == false) {
        alumn.isApproved = false
    } else if (alumn.T1 == false && alumn.T3 == false) {
        alumn.isApproved = false
    } else if (alumn.T2 == false && alumn.T3 == false) {
        alumn.isApproved = false
    }
})

console.log(alumns); 


