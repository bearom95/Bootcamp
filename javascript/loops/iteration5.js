// Iteracion 5 Usando FOR

// Usa un bucle for para recorrer todos los destinos del array y elimina los 
// elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, 
                        {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]


for (let destino of placesToTravel){
    if (destino.id== 11 || destino.id==40) {
       placesToTravel.splice(placesToTravel.indexOf(destino),1)
    }}
   console.log(placesToTravel)

// LA MANERA EN QUE LO HICE ANTES, SIN ARRAYS 
 /*   for (let destino of placesToTravel) {
    if (destino.id !== 11 && destino.id !== 40) {
         console.log(destino.name);
     } 
 } */