const org_sistema = require("./org_sistema")

function gauss(Ab, n){

    for(let k=0; k < n; k++){
        for(let i=0; i < n; i++){
            if(i!=k){
                let razao = Ab[i][k]/Ab[k][k]

                Ab[i][k] = 0
                for(let j=k+1; j<=n; j++){
                    Ab[i][j] -= razao*Ab[k][j]
                }
            }
        }        
    }

    let x = []

    for(let k=0; k<n; k++){
        // b[k]/A[k][k]
        x.push(Ab[k][n]/Ab[k][k])
    }

    return x
}

module.exports = gauss