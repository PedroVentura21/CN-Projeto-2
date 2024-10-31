const transposta = require("../includes/transposta")
const gauss = require("../sistemas-lineares/gauss")

// const Ab = [
//     [15, 17, 19, 3890], // metal
//     [0.3, 0.4, 0.55, 95], // plático
//     [1, 1.2, 1.5, 282] // borracha
// ]

const Ab = [
    [1, 1, 2, 4],
    [2, -1, -1, 0],
    [1, -1, -1, -1]
]

const b = [3890, 95, 282] // matriz coluna da quantidade de elementos em gramas

let T = transposta(A)
console.log(gauss(T, b))