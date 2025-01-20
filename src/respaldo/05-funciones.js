// Funciones

// Hay muchas formas de definir una funcion en JS

// La forma tradicional tiene el peligro de que es facil modificar su tipo con todas sus consecuencias...
// No debemos utilizar esta forma de declaracion
function saludar(persona){
    return "hola" + persona;
}

saludar = 34

saludar("pepito");

// Declarando la funcion de esta forma estamos protegidos del error relaconado anteriormente
const saludar2 = function(persona){return `hola ${persona}`};

saludar2 = 34;

// Las funciones de flecha 
// (No se deben utilizar como atributos de un objeto literal de JS)
// const saludar3 = (persona) => {return `Hola ${persona}`}
const saludar3 = persona => `Hola ${persona}`
// a) Si una funcion flecha no recibe argumentos es obligatorio el uso de parentesis vacio
const saludar4 = () => `Hola`;
// b) Si la complementacion de una funcion flecha requiere varias lineas es obligatorio el uso de las llaves y de la palabra return
// c) No se deben utilizar como atributos de un objeto literal de JS

const mifuncion = function(laFuncion, nombre){ laFuncion(nombre) };

mifuncion(saludar3, "pepito");