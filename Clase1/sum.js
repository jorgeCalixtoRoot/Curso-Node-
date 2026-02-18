// function sum (a, b) {
//     return a + b
// }

// module.exports = {
//     sum
// } // Es variable global que podemos utilizar para indicar que modulo se está exportando(commonjs)

module.exports = {
    sum: function sum (a, b) {
    return a + b
    }
} //otra forma de hacelo