const ajusteCurvas_reta = require('../sistemas-lineares/ajusteCurvas_reta');

// const arr = [
//     {x: 2, y: 2},
//     {x: 4, y: 11},
//     {x: 6, y: 28},
//     {x: 8, y: 40}
// ]

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
const op = [2010, 2020, 2030]
ajusteCurvas_reta(arr, op);