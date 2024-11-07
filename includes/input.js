const prompt = require('prompt-sync')({sigint: true})

///////////////////////////////////////////////////////////////////

function q1(){
    let A = new Array(3)
    let b = new Array(3)

    console.log("Digite a matriz 3x3 dos coeficientes")
    for(let i=0; i<3; i++){
        A[i] = new Array(3)
        
        console.log(`Linha ${i+1}:`)
        
        for(let j=0; j<3; j++){
            A[i][j] = parseFloat(prompt(`\ta${j+1}: `))
        }
    }

    console.log("Agora a matriz de resultados")
    for(let i=0 ; i<3 ; i++){
        b[i] = parseFloat(prompt(`\tx${i+1}: `))
    }

    return {A, b}
}

///////////////////////////////////////////////////////////////////

function q4(){
    let n

    do{
        n = parseInt(prompt("Quantidade (ímpar) de valores atribuidos a X: "))
        // ímpar para que funcione o método de Simpson
    }while(n%2 === 0)
    
    // entrada dos valores de x
        console.log("Digite os valores de X")
        
        let X = new Array(n)
        for(let i=0; i<n; i++){
            X[i] = parseFloat(prompt(`\tX${i}: `))
        }

    // entrada do M1
        console.log("Digite os valores de M1")
        
        let M1 = new Array(n)
        for(let i=0; i<n; i++){
            M1[i] = parseFloat(prompt(`\tM1[${i}]: `))
        }

    // entrada do M2
        console.log("Digite os valores de M2")
        
        let M2 = new Array(n)
        for(let i=0; i<n; i++){
            M2[i] = parseFloat(prompt(`\tM2[${i}]: `))
        }

    return {X, M1, M2}
}

module.exports = {q1, q4}