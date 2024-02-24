let firstObjt: object = { id: 1, name: 'first' }
let secondObj: object = { ...firstObjt }

console.log(secondObj)

let objName: object = { name: 'Juan', id: 3 }
let objId: object = { id: 2 }

/**
 * la propagación de objetos, nos sirve para evitar
 * la asignación de valores explicitamente
 */
let obj3 = { ...objName, ...objId }

console.log(obj3)

let arraglo1 = [1, 2, 3]
let arreglo2 = [3, 4, 5]

let arreglo3 = [...arraglo1, ...arreglo2]

console.log(arreglo3)