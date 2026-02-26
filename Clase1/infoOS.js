const os = require('node:os') // A la hora de importar módulos nativos de node, desde la versión 16 no es recomendable usar solo el nombre del modulo nativo, si no usar el prefijo node:

console.log('Información del sistema operativo:')
console.log('--------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura del sistema operativo', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)