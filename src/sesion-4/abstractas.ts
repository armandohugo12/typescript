abstract class EmployeeBase {
    public id: number
    name: string

    // los metos abstractos no se implementan
    abstract doWork(text: string): string

    constructor() {
        this.id = 0
        this.name = 'Juan'
    }
}

class OfficeWorker extends EmployeeBase {
    // podemos sobreescribir los métodos
    doWork(): string {
        return ''
    }
}

class OfficeManager extends OfficeWorker {
    public employees: OfficeWorker[] = []

    /**
     * no podemos cambiar el tipo retorno
     */
    /* doWork(): number {
        return 1
    } */
}

let employee = new OfficeWorker()

employee.id