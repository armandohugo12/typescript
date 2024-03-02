class SimpleClass {
    id: number | undefined 
    print() {
        console.log('se llamo el metodo pront de la clase simpleClass')
    }
}

let simpleClass = new SimpleClass()
let simpleClass2 = new SimpleClass()

simpleClass.print()
simpleClass2.print()