class StaticClass {
    id = 10
    static count = 0
    static print() {
        console.log(2)
        /**
         * no podemos llamar propiedades o métodos relacionados con la instancia
         * dentro de los métodos estaticos
         */
        //console.log(this.id)
    }

    updateCount() {
        return StaticClass.count++
    }
}

let staticClass = new StaticClass()
let staticClass2 = new StaticClass()

/**
 * los métodos éstaticos no se pueden llamar en instancias
 */
// staticClass.print()

StaticClass.print()

console.log(staticClass.updateCount())
console.log(staticClass2.updateCount())