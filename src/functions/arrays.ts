export function embaralhar(elementos : any[]) : any[]{
    return elementos
        .map(valor => ({ valor, aleatorio: Math.random() }))
        .sort((primeiroObjeto, segundoObjeto) => primeiroObjeto.aleatorio - segundoObjeto.aleatorio)
        .map(objeto => objeto.valor)
}