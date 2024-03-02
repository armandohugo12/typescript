class SimpleClasss {
    private id: number
    readonly name: string

    constructor(name: string) {
        this.id = 1
        this.name = name
    }

    // public no es necesario señalarlo ya que es por defecto
    public print() {
        console.log('simpleClass.id = ' + this.id)
    }

    /**
     * las propiedades tipo readonly solo se puede asignar 
     * valores dentro de constructor de la clase
     */
    /* setName(name: string) {
        this.name = name
    } */
}

let SimpleClass = new SimpleClasss('juan')

// simpleClass.name = ''

SimpleClass.print()