/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/
//opcionalmente en los eventListener podemos meter otro parametro (ev) se puede llamar al evento.
//Target del evento es quién ha hecho el evento click y su info, en este caso btnToClick. 
//Además, del target podemos sacar lo que queramos, su value, su id, o sea, el id del botón en este caso
const btnToClick = document.querySelector("#btnToClick");
btnToClick.addEventListener("click", (ev) => console.log(ev));


/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */
//con focus, el evento se desata cuando seleccionamos el elemento
const input = document.querySelector(".focus");
input.addEventListener("focus", (ev) => console.log(ev.target.value));

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */
const input2 = document.querySelector(".value");
input2.addEventListener("input", (ev) => console.log(ev.target.value));







