import './style.css';

//Creamos el objeto color_palette. Codigos son 
//las claves y nombre de color son los valores

const COLOR_PALETTE = {
  '#264653': 'Dark Blue',
  '#2a9d8f': 'Light Blue',
  '#e9c46a': 'Pale Yellow',
  '#f4a261': 'Skin',
  '#e76f51': 'Light Pink'
};

//Generar muchas opciones para Select
//Convertir el objeto en array con Object.keys
//Con forEach generamos tantas options como necesitemos

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerHTML = COLOR_PALETTE[color];
  
    colorPickerSelect.append(option);
  })
} 

addOptionsToColorPicker()
//Así tendríamos todas las options de nuestro Select
//Hay que inyectarlas al Select que está en el HTML
//Recuperamos el elemento select (usando el ID color-picker) y le añadimos OPTION como hijos gracias al método append
//Para optimizar el código alojamos todo en una funcion

//IMPLEMENTAR LOS CAMBIOS DE COLOR
//Al elemento HTML que recuperamos con queryselector, le añadimos el event listener
//que tiene dos parametros como máximo: lo que tiene que pasar (change) y lo que pasará (la función)
//event se refiere a Qué ha pasado? y lo usamos para saber por ejemplo: quién lo ha accionado
const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector('#color-name');
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value; 
    //Almacenamos el código de color
    //event lo usamos en este caso para saber quién accionó el evento

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};

//Le hemos añadido al Select un esuchador de eventos que cada vez que cambia
//gracias al evento "Change", seteará el valor del target del evento (código hexa) en una constante
//Cada vez que haya un cambio en el select, recuperará la opción elegida, almacenará el value de cada opción y lo seteará como fondo

addEventListenerToColorPicker();






