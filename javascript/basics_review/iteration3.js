// Iteracion 3 MIX FORS

/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript. */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let totalSounds = new Object ();
for (let user of users) {
    for (let sound in user.favoritesSounds) {
        if (totalSounds[sound] == null) {
            totalSounds[sound] = 1;
        } else {
            totalSounds[sound] = totalSounds[sound] + 1;
        }
    }
}

console.log(totalSounds);

//Todos los formatos. Array con todos los formatos
/* let allFormats = [];
for (let user of users) {
    for (let sound in user.favoritesSounds) {
        allFormats.push(user.favoritesSounds[sound]['format']);
    }
}

console.log(allFormats);   // Debe darme un array con mp3, ogg ...


console.log(users[2].favoritesSounds['shower']['volume']); */   // Debe dar 50 


