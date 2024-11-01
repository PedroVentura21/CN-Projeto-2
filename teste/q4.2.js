const simpson2 = require("../sistemas-lineares/simpson2")
const trapezio = require("../sistemas-lineares/trapezio")

var x = [0, 10, 20, 30, 40]
var M1 = [50.8, 86.2, 136, 72.8, 51]
var M2 = [113.6, 144.5, 185, 171.2, 95.3]

console.log(simpson2(x, M2)-simpson2(x, M1))
console.log(trapezio(x, M2)-trapezio(x, M1))