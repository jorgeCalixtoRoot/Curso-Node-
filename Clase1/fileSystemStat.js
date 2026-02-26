/* El sistema de archivos es uno de los módulos mas usados en node.js */

const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

// Síncrono
console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size, //tamaño del archivo en bytes
)