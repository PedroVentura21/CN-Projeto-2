const org_sistema = require('./org_sistema')

function gauss_seidel(Ab, x, tol, limit){
    const n = x.length // quantidade de equações
    Ab = org_sistema(Ab, n) // organizando o sistema para melhor desempenho
    
    // quantidade maxima de iterações
    for(let k=0; k < limit; k++){
        // copiando os valores atual de x
            let x_ant = [...x] 
        // maior diferença entre os valores de x para controle de tolerância
            let dmax = -1
            // como a diferença será dada em valor absoluto, então 
            // na primeira iteração será trocado o valor de dmax

        // algoritmo do método:
            // x[i] = (1/A[i][i])(b[i] - A[i][1]*x[1] - A[i][2]*x[2] - ... - A[i][j]*x[j] - ... - A[i][n]*x[n])
                // onde i != j

            // ou seja:
                // x[i] = (1/A[i][i])(b[i] - somatório(A[i][j]*x[j]))
                // onde i != j

            // além disso:
            // dki = |xi_atual - xi_anterior|
            // se o maior dki for menor que a tolerância acaba as iterações
                // caso contrário, então o processo é repetido com os novos valores
            
        for(let i=0; i < n; i++){
            let soma = 0

            for(let j=0; j < n ; j++){
                if(i !== j)
                    soma += Ab[i][j]*x[j]
            }
            
            x[i] = (Ab[i][n]-soma)/Ab[i][i]

            let dk = Math.abs(x[i]-x_ant[i])
            dmax = Math.max(dk, dmax)

        }
        
        if(dmax < tol){
            break
        }
    }

    return x
}


// teste

// var A = [
//     [15, 17, 19, 3890], // metal
//     [0.3, 0.4, 0.55, 95], // plático
//     [1, 1.2, 1.5, 282] // borracha
//         ]
// var x = [0, 0, 0]

// console.log(gauss_seidel(A, x, 0.00001, 300))

module.exports = gauss_seidel