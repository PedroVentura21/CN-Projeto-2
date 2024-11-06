const Int = require("../sistemas-lineares/integral")
const input = require("../includes/input")

const entrada = input.q4()

const x = entrada.X
const M1 = entrada.M1
const M2 = entrada.M2

// var x = [0, 10, 20, 30, 40]
// var M1 = [50.8, 86.2, 136, 72.8, 51]
// var M2 = [113.6, 144.5, 185, 171.2, 95.3]

console.log(`resultado mét. de Simpson: ${Int.simpson(x, M2)-Int.simpson(x, M1)}`)
console.log(`resultado mét. dos Trapezios: ${Int.trapezio(x, M2)-Int.trapezio(x, M1)}`)