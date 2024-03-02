interface IdName {
    id: number;
    name: string;
    print: (text: string, age: number) => void
}

let idObj: IdName = {
    id: 1,
    name: 'Juan',
    print: (text, age) => console.log(text, age)
}

idObj.print('hola', 2)


interface Optional {
    id: number;
    name?: string;
}

let optional: Optional = {
    id: 2
}
a 
interface WeakType {
    id?: number;
    name?: string;
}

let weak: WeakType = {}