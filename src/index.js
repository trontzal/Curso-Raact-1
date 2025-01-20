// Importacion exportacion de modulo

import equipos, { miVariable } from './respaldo/data/futbol';

/* console.log(equiposFutbol[0]); */
/* console.log(miVariable);
console.log(equipos[0]); */

// Deseamos buscar un equipo en el array importado equipos partiendo de su id

const getEquipoById = (id) => {

    return equipos.find((equipo) => equipo.id === id);
}

const {id, nombre, ciudad} = getEquipoById(2)

console.log(id)
console.log(nombre)
console.log(ciudad) 

// Deseamos buscar todos los equipos de madrid (filter)

const getEquipByCiudad = (ciudad)