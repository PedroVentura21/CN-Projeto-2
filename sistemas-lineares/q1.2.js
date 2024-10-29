const gauss_seidel = require("./gauss-seidel")

const Ab = [
    [15, 17, 19, 3890], // metal
    [0.3, 0.4, 0.55, 95], // plático
    [1, 1.2, 1.5, 282] // borracha
]

var x = [0, 0, 0]

console.log(gauss_seidel(Ab, x, 0.01, 90))