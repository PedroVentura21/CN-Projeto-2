const ajusteCurvas_reta = require('../sistemas-lineares/ajusteCurvas_reta');

// const arr = [
//     {x: 2, y: 2},
//     {x: 4, y: 11},
//     {x: 6, y: 28},
//     {x: 8, y: 40}
// ]

const arr = [
    {y: 2250, x: 1971},
    {y: 3300, x: 1972},
    {y: 6000, x: 1974},
    {y: 29000, x: 1978},
    {y: 134000, x: 1982},
    {y: 275000, x: 1986},
    {y: 1200000, x: 1989},
    {y: 3100000, x: 1993},
    {y: 7500000, x: 1997},
    {y: 9500000, x: 1999},
    {y: 42000000, x: 2000}
]
const op = [2010, 2020, 2030]
ajusteCurvas_reta(arr, op);
// PARA ENTRADAS VIA TERMINAL
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