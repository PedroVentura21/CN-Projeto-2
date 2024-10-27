function org_sistema(Ab, nEq){
    const n = nEq

    for(let j=0; j < n; j++){
        let max = 0, imax = j

        for(let i=j; i < n; i++){
            if(max < Math.abs(Ab[i][j])){
                max = Math.abs(Ab[i][j])
                imax = i
            }
        }

        let aux = Ab[j]
        Ab[j] = Ab[imax]
        Ab[imax] = aux
    }

    return Ab
}

module.exports = org_sistema