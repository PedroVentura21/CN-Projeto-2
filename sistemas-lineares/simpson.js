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

    for(let i=1; i<n; i++){
        
    }

}