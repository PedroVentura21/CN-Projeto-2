const ajusteCurvas_reta = require('../sistemas-lineares/ajusteCurvas_reta');

const arr = [
    {y: Math.log10(2250), x: 1971},
    {y: Math.log10(3300), x: 1972},
    {y: Math.log10(6000), x: 1974},
    {y: Math.log10(29000), x: 1978},
    {y: Math.log10(134000), x: 1982},
    {y: Math.log10(275000), x: 1986},
    {y: Math.log10(1200000), x: 1989},
    {y: Math.log10(3100000), x: 1993},
    {y: Math.log10(7500000), x: 1997},
    {y: Math.log10(9500000), x: 1999},
    {y: Math.log10(42000000), x: 2000}
]
const op = [2010, 2020, 2030];

ajusteCurvas_reta(arr, op);

// var prompt = require('prompt-sync')();

// const arr = [];
// const op = [];

// let amount = Number(prompt("Quantidade de pontos: "));
// console.log("\n");
// let counterAmount = 1;

// while (amount > 0) {
//     const x = Number(prompt(`x${counterAmount}: `));
//     const y = Number(prompt(`y${counterAmount}: `));
//     console.log("\n");

//     arr.push({x: x, y: y});

//     counterAmount++;
//     amount--;
// }

// prompt("Valor x de interesse(Responda dividindo com virgula cada valor): ").split(',').forEach((str) => {
//     op.push(Number(str));
// });


