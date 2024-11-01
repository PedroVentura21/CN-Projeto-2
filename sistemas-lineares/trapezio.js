function trapezio(x, fx){
    const n = x.length-1
    const h = (x[n]-x[0])/n

    var soma = 0
    for(let i=1; i<n; i++)
        soma += fx[i]

    return (h/2)*(fx[0] + 2*soma + fx[n])
}

module.exports = trapezio