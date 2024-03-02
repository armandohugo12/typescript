class ClassWitheAccesors{
    
    // EL guion bajo significa que es un metodo privado
        private _id: number = 10

   
    public get id() : number {
        return this._id
    }

    public set id(_id : number){
        this._id = _id;
    }
    
}

let classWitheAccesors = new ClassWitheAccesors()

classWitheAccesors.id = 20

console.log(classWitheAccesors)