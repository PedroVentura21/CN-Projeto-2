// unindo as matrizes A e b do sistema linear
function matrizAb(A, b){
    const nl = A.length

    let x = new Array(nl)

    for(let i=0; i<nl; i++){
        x[i] = [...A[i], b[i]]
    }

    return x
}

module.exports = matrizAb