interface Usuario {
    id: number;
    nombre: string;
}

const usuarios: Usuario[] = [
    {
        id: 1,
        nombre: 'Johnn'
    },
    {
        id: 2,
        nombre: 'Ivan'
    },
    {
        id: 3,
        nombre: 'Ana'
    }
]

const buscarPersonal = (id: number) => {
    /**
     * resolve si el resultado es el esperado
     * reject si sucede algun error o algo no esperado
     */
    return new Promise<Usuario>((resolve, reject) => {
        const usuario = usuarios.find(u => u.id === id)
        usuario ? resolve(usuario) :  reject('El id ' + id + ' no existe')
    })
}

// fetch('./usuarios/1').then().catch()

buscarPersonal(6)
.then(usuario => {
    //
    console.table(usuario)
    return usuario.nombre
})
.then(nombre => console.log(nombre))
.catch(error => console.log(error))


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => {
    if (!response.ok) {
        throw new Error('Error al obtener los datos');
    }
    return response.json();
})
.then(data => {
    console.log(data); // Resuelve la promesa con los datos obtenidos
})
.catch(error => {
    console.log(error); // Rechaza la promesa con el error
});