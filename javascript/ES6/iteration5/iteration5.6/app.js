/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
//filter y map trabajan sobre arrays y si los asignamos a una constante, nos devuelven un nuevo array sin modificar el anterior
//la flecha significa que me devuelva
/* let input = document.querySelector("input"); 
input.addEventListener("input", () => printname(input.value));

let printname = (word) => {
const filtered = streamers.filter(streamer => streamer.name.includes(word))
    console.log(filtered.name)
} */

const input = document.querySelector("input");
function buscarNombre() {
streamers.filter((streamer) => {
    if (input.value == "") {
        console.clear()    //así le limpiamos la consola cuando no hay nada
    } else if (streamer.name.toLowerCase().includes(input.value.toLocaleLowerCase())) {
        console.log(streamer.name);
    } 
  });
}
input.addEventListener("input", buscarNombre);

   

