interface Person {
    id: number;
    name: string;
}

interface DescrValue {
    descr: string;
    value: number;
}

function pirntNameOrValue(obj: IdName | DescrValue) {
    if ('id' in obj) {
        console.log(obj.name)
    }
    
    if ('descr' in obj) {
        console.log(obj.value)
    }
}

type PersonPropertyName = keyof Person
type PersonPropertyName2 = 'id' | 'name'

function getProperty(key: PersonPropertyName, value: Person) {
    console.log(key, value[key])
}

getProperty('id', { id: 3, name: 'Ana' })

getProperty('name', { id: 3, name: 'Ana' });

// getProperty('telephone', { id: 3, name: 'Ana' });