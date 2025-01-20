// No utilizar nunca var para declarar variables en javascript(Mala praxis)
//Tanto let como const
let miVariable = 23;

const nombre = "Richard";

const miFuncion = 43;

if(miVariable > 20){

    let miVariable = 45;
    const miFuncion = 45;
}

console.log("Hola mundo")

// const aplicado a un objeto hace que ese obejeto no pueda ser sustituido