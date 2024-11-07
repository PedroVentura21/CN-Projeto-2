const transposta = require("../includes/transposta")
const input = require("../includes/input")
const gauss = require("../sistemas-lineares/gauss")

const A = [
    [15, 0.3, 1],
    [17, 0.4, 1.2],
    [19, 0.55, 1.5]
]

const bkg = [3.89, 0.095, 0.282] // matriz coluna da quantidade de elementos em kg

// let matriz = input.q1()
// let bkg = matriz.b
// let A = matriz.A

let bg = bkg.map(m => m*1000)
let At = transposta(A)

let x = gauss(At, bg)

console.log(
    "Poderão ser produzidos por dia\n" +
    `\tComp. 1: ${x[0].toFixed(0)} unidades\n` +
    `\tComp. 2: ${x[1].toFixed(0)} unidades\n` +
    `\tComp. 3: ${x[2].toFixed(0)} unidades`
)