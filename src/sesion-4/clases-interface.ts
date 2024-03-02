interface Print {
    print: () => void
}

class ClassA implements Print {
    print(){
        console.log('ClassA')
    }
}

class ClassB implements Print {
    print(){
        console.log('ClassB')
    }

    /**
     * la interface solo nos indica las propiedades o métodos minímos
     * que debe tener la clase pero no restringe métodos o propiedades extras
     */
    prints(){
        console.log('ClassA')
    }
}

function printClass(obj: Print) {
    obj.print()
}

let myClass = new ClassA()
printClass(myClass)
printClass(new ClassB())