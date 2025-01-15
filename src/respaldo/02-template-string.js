// Template Strings
// Nueva forma de tratar con los strings en javascripts

const nombre = "Geddy";
const apellido = "Lee"

// Forma tradicional de concatenar
console.log(nombre + " " + apellido)

// Con template strings
console.log(`${saludar()} ${nombre} ${apellido}`)

function saludar(){
    return "Hola";
}