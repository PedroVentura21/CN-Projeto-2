const gauss = require('./gauss');

// PontosOrdenado = [{x: 10, y: 9}]
function ajusteCurvas_reta (arr) {
    const g1 = 1;
    let g2 = 'x';

    let g1_somat_quad = 0;
    let g1g2_somat = 0;

    let g2_somat_quad = 0;
    let g2g1_somat = 0;

    let g1y_somat = 0;
    let g2y_somat = 0;

    arr.forEach(({x, y}) => {
        // console.log(`x: ${x}, y: ${y}`)
        g2 = x;

        g1_somat_quad += (1)**2;
        g1g2_somat += g1*g2;

        g2g1_somat += g2*g1;
        g2_somat_quad += (g2)**2;

        g1y_somat += g1*y;
        g2y_somat += g2*y
    })
    console.log(`g1_somat_quad = ${g1_somat_quad} | g1g2_somat = ${g1g2_somat} | g2g1_somat = ${g2g1_somat} | g2_somat_quad = ${g2_somat_quad} | g1y_somat = ${g1y_somat} | g2y_fomat = ${g2y_somat}`);
    const myArr = [
        [g1_somat_quad, g1g2_somat, g1y_somat],
        [g2g1_somat, g2_somat_quad, g2y_somat]
    ]
    const resultado = gauss(myArr, 2);
    const c1 = resultado[0];
    const c2 = resultado[1];

    if (c2 < 0) {
        return `${c1} - ${c2}x`;
    }

    return `${c1} + ${c2}x`;
}

module.exports = ajusteCurvas_reta;