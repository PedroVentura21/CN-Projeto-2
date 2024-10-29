const gauss = require("../sistemas-lineares/gauss")

const Ab = [
    [15, 17, 19, 3890], // metal
    [0.3, 0.4, 0.55, 95], // plático
    [1, 1.2, 1.5, 282] // borracha
]

console.log(gauss(Ab, 3))