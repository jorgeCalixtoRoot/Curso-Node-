// Vamos a utilizar el patrón de diseño módulo, con el cual vamos a separar nuestro código en diferentes ficheros y los vamos a poder importar y exportar para reutilizar el código

const {sum} = require('./sum') // Aquí importamos la variable global 

console.log(sum(1, 2))