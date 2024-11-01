const { create, all } = require('mathjs')
const config = { }
const math = create(all, config)

//////////////////////////////////////

function simpson(func, inicio, fim, numeroDeIntervalos){
    const p = math.parse(func)
    const f = p.compile()
    const a = inicio, b = fim
    const n = numeroDeIntervalos

    const h = (b-a)/n
    // somatório das funções com x de índices ímpares e pares
        let somaImpar = 0, somaPar = 0
    // x1 =>
        let x = a+h
    // boolean que determinará se o índice é ímpar ou par
        let ehImpar = true // true por começar por x1
    // somando
        while(x<b){
            let fx = f.evaluate({x: x})

            
            if(ehImpar){
                somaImpar += fx
                ehImpar = false
            }else{
                somaPar += fx
                ehImpar = true
            }

            x += h
        }
    // aplicando os valores a fórmula do método
        let resultado = f.evaluate({x: a}) + f.evaluate({x: b}) +
                        4*somaImpar + 2*somaPar

        resultado *= (h/3)

    return resultado
}

module.exports = simpson