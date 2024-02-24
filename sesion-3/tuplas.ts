let tuple1:[string, boolean]
tuple1 = ['test', true]

/**
 * Ts nos ayuda a tipar a tipar arreglos y estos solo podran aceptar
 * los valores que le hayyamos indicado
 * 
 */
//ejemplo erroneo
//tuple1 = [false, 'test']


console.log(tuple1[0])
console.log(tuple1[1])

/**
 * la destructuración nos ahorra lineas de código 
 * evitando declarar en lineas separadas cada variable
 * que corresponda al indice o valor de un arreglo u objeto
 */
let [a, b] = tuple1

console.log(a, b)


let complexObj = {
    aNum: 1,
    bString: 'test',
    cBool: true
}


/**
 * la destructuración no obliga a que se declaren todas las variebles de cada propiedad
 * es decir podemos omitir valores de un objeto o arreglo
 */
let {aNum, bString, cBool} = complexObj

console.log(aNum, bString, cBool)