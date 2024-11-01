function simpson2(x, fx){
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

module.exports = simpson2