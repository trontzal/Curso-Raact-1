// Destructuracion de objetos

const persona = {

    nombre: "Pepito",
    edad: 23,
    direccion: {
        calle: "calle falsa",
        numero: 123
    }
}

let elNombre = persona.nombre;

/* const {nombre, edad} = persona; */

const retornaPeronsa = function (nombre, edad) {
    return {
        elNombre: nombre,
        laEdad: edad
    }
}

const laOtraPersona = retornaPeronsa(persona);

console.log(laOtraPersona);

// Crear un objeto  f1 con dos atributos, nombre y escuderia
// 1. Desestructurar el objeto y mostrar el valor de nombre y escuderia con un console.log
// 2. Crear una funcion de flecha llamada nombrePiloto que reciva el objeto desestructurado como argumento y devuelva el nombre del piloto

const f1 = {
    nombre: "Fernando Alonso",
    escuderia: "Red Bull",
}

const { nombre:nombre2, escuderia } = f1;

console.log(nombre2, escuderia);

const nombrePiloto = ({nombre, esuderia}) =>{
    return nombre;
}

console.log(nombrePiloto(f1));

// Desestructuracion de objetos anidados

const usuario = {

    pass: "1234",
    direccion: {
        calle: "calle falsa",
        numero: 123
    }
}

console.log(usuario.direccion.calle);

const {pass, direccion: {calle, numero}} = usuario;

console.log(pass, calle, numero)