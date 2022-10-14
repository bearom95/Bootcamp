// Iteracion 4 For ... in

// Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let info in alien) {
    console.log("Alien tiene la clave " + info + " con el valor: " + alien[info]);
}

