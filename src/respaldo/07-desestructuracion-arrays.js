// Desestructuracion de arrays

const pokemon = ["pikachu", "raichu", "charmander"];

console.log(pokemon[1]);

const [elPokemon1] = pokemon;

////////////////////////////////////////////////////////////////////////////////////////////

const retornaArray = () => {

    return ["Abc", 123];
}

const [letras, numeros] = retornaArray();

console.log(letras);
console.log(numeros);

/////////////////////////////////////////////////////////////////////////////////////////////

const prueba = (valor) => {

    return [valor, () => {return "Hola mundo"}];
}

const [p1, p2] = prueba(1000);

console.log(p1);
console.log(p2());