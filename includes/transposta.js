// transposição de matrizes
function transposta(A){
    const nl = A.length
    const nc = A[0].length

    let X = new Array(nc)

    for(let i=0; i < nc; i++){
        X[i] = new Array(nl)

        for(let j=0; j < nl; j++){
            X[i][j] = A[j][i]
        }
    }

    return X
}

module.exports = transposta