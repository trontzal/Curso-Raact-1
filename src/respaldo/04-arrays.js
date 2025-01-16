// Arrays

// En JS los arays pueden contener diferentes tipos de datos
// Lo mismo que los objetos se pueden crear de forma literal

const miArray = [null, undefined, true, "hola", 2, [1,2,3], {nombre: "Pepito"}];

let miArray2 = miArray; 

let miArray3 = [...miArray];// Spread operator copia pura

miArray3.push("manzana");

// Otra forma de haver una copia pura de un array es utilizando el metodo MAP

const miArray4 = miArray3.map( function(value){ return value});