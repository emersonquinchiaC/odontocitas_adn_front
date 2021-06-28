export class Usuario{

    id : number;
    identificacion:String;
    nombre: String;

    constructor(id: number, identificacion: string,nombre:string) {
        this.id = id;
        this.identificacion = identificacion;
        this.nombre = nombre;
    }

}