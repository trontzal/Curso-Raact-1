//Objetos literales

let miVariable = 6 //number
miVariable = "hola"; //string

let miVariable6; //undefined

let piloto = {

    nombre: "Fernando Alonso",
    escuderia: "Aston Martin",
    campeonatosDelMundo: [2004,2005],
    datosPersonales:{
        direccion: "Av.Oviedo",
        telefono:"345677",
    },
    pilotar: function(){return "Fernando Alonso pilotando"},

}

piloto["pilotar"]()


piloto.datosPersonales.direccion;
piloto["datosPersonales"]["direccion"];



let miVariable2 = miVariable;
miVariable2 = "adios";

console.log(miVariable);
console.log(miVariable2);

let piloto2 = piloto;

//notación punto
console.log(piloto.nombre);

//notación corchete
console.log(piloto["nombre"]);

piloto.escuderia = "Ferrari";

console.log(piloto);

console.log(piloto2);


function miFuncion(unPiloto){

  
    unPiloto.nombre = "Kimmi Raikonnen";


}



miFuncion(piloto2);

console.log(piloto);

console.log(piloto2);

//spread operator

let piloto3 = {...piloto};//hacemos una copia pura del piloto

piloto3.escuderia = "No tiene escudería";

console.log(piloto);

console.log(piloto3);