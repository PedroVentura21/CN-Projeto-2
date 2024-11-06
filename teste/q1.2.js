const transposta = require("../includes/transposta")
const input = require("../includes/input")
const gauss = require("../sistemas-lineares/gauss")

// const A = [
//     [15, 0.3, 1],
//     [17, 0.4, 1.2],
//     [19, 0.55, 1.5]
// ]

// const bKg = [3.89, 0.095, 0.282] // matriz coluna da quantidade de elementos em kg
let matriz = input.q1()

let bg = matriz.b.map(m => m*1000)
let At = transposta(matriz.A)

console.log(gauss(At, bg))