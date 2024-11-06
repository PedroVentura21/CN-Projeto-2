function simpson(x, fx){
    const n = x.length-1
    const h = (x[n]-x[0])/n

    var somaImpar = 0, somaPar = 0
    for(let i=1, ehImpar = true; i < n; i++){
        if(ehImpar){
            somaImpar += fx[i]
            ehImpar = false
        }else{
            somaPar += fx[i]
            ehImpar = true
        }
    }

    return (h/3)*(fx[0] + fx[n] + 4*somaImpar + 2*somaPar)
}

function trapezio(x, fx){
    const n = x.length-1
    const h = (x[n]-x[0])/n

    var soma = 0
    for(let i=1; i<n; i++)
        soma += fx[i]

    return (h/2)*(fx[0] + 2*soma + fx[n])
}

module.exports = {trapezio, simpson}