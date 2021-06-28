export class Cita{

    id : number;
    identificacionUsuario:String;
    tipoCita: String;
    fechaInicio: Date;

    constructor(id: number, identificacionUsuario: string,tipoCita:string, fechaInicio: Date) {
        this.id = id;
        this.identificacionUsuario = identificacionUsuario;
        this.tipoCita = tipoCita;
        this.fechaInicio = fechaInicio;
    }

}