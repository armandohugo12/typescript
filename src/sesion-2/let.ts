
// EL var es para que agarre las varibles globlar

/*var index: number = 0 

if (index == 0) {
    var index: number = 2
    console.log(`index: ${index}`)
}

console.log(`index: ${index}`)*/

// el resultado es index = 2
// el resultado es index = 2

// El let es para variables locales 

/*let index: number = 0 

if (index == 0) {
    let index: number = 2
    console.log(`index: ${index}`)
}

console.log(`index: ${index}`)*/

// el resultado es index = 2
// el resultado es index = 0

/* si trabajamos con ts en crudo, posiblemente coincidamos con nombre de varibales reservadas por TS
 * pera evitar esto podemos agregar la siguient configuración
 * "moduleDetection": "force"
 * o agregando export {} al inicio del archivo
 * o simplemente cambiando el nombre de la variable*/