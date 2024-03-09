interface Usuario {
    id: number;
    nombre: string;
}

interface Role {
    id: number;
    rol: string;
}

const usuarios: Usuario[] = [
    {
        id: 1,
        nombre: 'Johnn'
    },
    {
        id: 6,
        nombre: 'Ivan'
    },
    {
        id: 3,
        nombre: 'Ana'
    }
]

const roles: Role[] = [
    {
        id: 1,
        rol: 'administrador'
    },
    {
        id: 4,
        rol: 'vendedor'
    },
    {
        id: 3,
        rol: 'almacen'
    }
]

const buscarPersonal = (id: number) => {
    /**
     * resolve si el resultado es el esperado
     * reject si sucede algun error o algo no esperado
     */
    return new Promise<Usuario>((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.find(u => u.id === id)
            usuario ? resolve(usuario) :  reject('El usuario con el id: ' + id + ' no existe')
        }, 2000)
    })
}

const buscarRol = (id: number) => {
    /**
     * resolve si el resultado es el esperado
     * reject si sucede algun error o algo no esperado
     */
    return new Promise<Role>((resolve, reject) => {
        setTimeout(() => {
            const rol = roles.find(r => r.id === id)
            rol ? resolve(rol) :  reject('El rol con el id: ' + id + ' no existe')
        }, 1000)
    })
}

// fetch('./usuarios/1').then().catch()

// buscarPersonal(6)
// .then(usuario => {
//     //
//     console.table(usuario)
//     return usuario.nombre
// })
// .then(nombre => console.log(nombre))
// .catch(error => console.log(error))


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => {
    if (!response.ok) {
        throw new Error('Error al obtener los datos');
    }
    return response.json();
})
.then(data => {
    // console.log(data); // Resuelve la promesa con los datos obtenidos
})
.catch(error => {
    console.log(error); // Rechaza la promesa con el error
});

const buscarEmpleado = async (id:number): Promise<{id: number, nombre: string, rol: string} | string> => {
    try {
        let personal = await buscarPersonal(id)
        let rol = await buscarRol(id)
        return {
            id: personal.id,
            nombre: personal.nombre,
            rol: rol.rol
        } 
    } catch (error) {
        throw error
    }
}

async function getDatos(id:number) {
    let [empleado1, empleado2] = await Promise.all([
        buscarEmpleado(1),
        buscarEmpleado(2)
    ])

    return [empleado1, empleado2]
}

// getDatos(2).then(datos => console.log(datos))

buscarEmpleado(2)
    .then(empleado => console.log(empleado))
    .catch(error => console.log(error))