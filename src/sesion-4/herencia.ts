interface Base {
    id: number | string;
}

/**
 * podemos dsimunuir el tipado más no ampliarlo
 */
interface Base2 extends Base {
    id: number;
    ids: number;
}

/**
 * se puede extender más de una interfaz
 * y no es necesario declarar las propiedades heredadas
 */
interface Derivada extends Base {
    name: string;
}

class NameClass implements Derivada {
    id: number;
    name: string;

    constructor(name: string){
        this.id = 0
        this.name = name
    }

    printName(text: string) {
        console.log(this.name + text)
    }
}

class ClassC implements Base2 {
    id = 0;
    ids = 0
}


class AgeClass extends NameClass {
    age: number = 0
    ids = 0

    constructor(name: string, age: number) {
        super(name)
        this.age = age
    }

    printName(text: string) {
        console.log(this.id, text)
    }
}

let person: AgeClass = new AgeClass('Ana', 25) // { id: 10, name: 'ana', age: 24 }

person.printName(' test')