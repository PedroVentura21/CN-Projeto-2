const matrizAb = require("../includes/matrizAb")
const transposta = require("../includes/transposta")
var A = [
    [1, 2 , 3],
    [5, 6, 7]
]

let b = [15, 55, 99]

let T = transposta(A)

console.log(T)
console.log(matrizAb(T, b))