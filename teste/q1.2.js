const transposta = require("../includes/transposta")
const gauss = require("../sistemas-lineares/gauss")

const A = [ // matriz da tabela
    [15, 0.3, 1],
    [17, 0.4, 1.2],
    [19, 0.55, 1.5]
]

const b = [3890, 95, 282] // matriz coluna da quantidade de elementos em gramas

let T = transposta(A)
console.log(gauss(T, b))