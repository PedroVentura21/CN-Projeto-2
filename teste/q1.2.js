const transposta = require("../includes/transposta")
const gauss = require("../sistemas-lineares/gauss")

const Ab = [
    [1, 1, 2],
    [2, -1, -1],
    [1, -1, -1]
]

const b = [3890, 95, 282] // matriz coluna da quantidade de elementos em gramas

let T = transposta(A)
console.log(gauss(T, b))