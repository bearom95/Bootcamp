/* Iteracion 2 Mix Fors

Dado el siguiente javascript usa forof y forin para hacer la media 
del volumen de todos los sonidos favoritos que tienen los usuarios */

// Tenemos un array de objetos donde la clave favoriteSounds de cada objeto, tiene un valor que es a su vez un objeto de 3 claves. Y el valor de cada una de esas 3 claves es a su vez otro objeto que tiene dos claves (format y volume), los numeros son los valores de la clave volume. 

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

let allVolumes = [];                                //Creo un array en cero donde iremos almacenando los valores de Volume
for (let user of users) {
    for (let sound in user.favoritesSounds) {                   //accediendo al nivel por debajo de favoriteSounds
        allVolumes.push(user.favoritesSounds[sound].volume);    
        //Accedemos a los valores de cada clave del objeto/valor favoriteSounds (va entre llaves) y dentro de ellos vamos a la clave volume y solo nos quedamos con su valor, que pusheamos al array allVolumes
    }
}
// Ya tenemos el array de volumenes, hay que sumar los valores y dividir entre su longitug
let averageVolume = (array) => {
    let suma = 0;
    for (let element of array) {
        suma = suma + element;
    }
    return suma/array.length
}


console.log(averageVolume(allVolumes));
 


/* console.log(users[0].favoritesSounds.waves.volume); MANERA DE LLEGAR AL VALOR DE VOLUMEN */