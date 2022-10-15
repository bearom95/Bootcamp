/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
let names = users1.map(user => user.name); //como un for, me está sacando por cada usuario los valores de la clave name
console.log(names);


/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. 
*/
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const namestoAnacleto = users2.map((user)=> {
	if(user.name[0]=="A") {
		user.name="Anacleto"}
	    return user.name;
});
console.log(namestoAnacleto);

//OTRA OPCIÓN SACANDO TODOS LOS OBJETOS, NO SOLO LA LISTA
//Con spread Operator copiamos todo el array y hacemos que name sea Anacleto
/* let namesToAnacleto = users2.map (user => {
	if (user.name[0] == "A") {
		return {...user, name: "Anacleto"}   
	} else {
		return user;
	}
})
console.log(namesToAnacleto);*/



/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let arrayCities = cities.map((city) => {
	if (city.isVisited==true) {
		console.log(city.name + " (Visitado)")
	}
})







