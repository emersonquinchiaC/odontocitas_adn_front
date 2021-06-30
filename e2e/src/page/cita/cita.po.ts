import { by,element } from "protractor";

export class CitaPage{

    private linkCrearCita = element(by.css('app-listar-citar #linkCrearCita'));
    private linkGuargarCita = element(by.css('app-crear-cita #linkGuardarCita'));
    private linkListarCitas = element(by.css('app-crear-cita #linkListarCita'));
    private inputIdentificacionUsuario= element(by.css('app-crear-cita #identificacionUsuario'));
    private inputTipoCita= element(by.css('app-crear-cita #tipoCita'));
    private inputFechaInicio = element(by.css('app-crear-cita #fechaInicio'));

    private linkEditarCita = element(by.css('app-listar-citar #linkEditarCita'));
    private linkGuardarEditarCita = element(by.css('app-actualizar-cita #linkEditarCita'));
    private inputTipoCitaEditar= element(by.css('app-actualizar-cita #tipoCitaEditar'));
    private inputFechaInicioEditar = element(by.css('app-actualizar-cita #fechaInicioEditar'));

    private listaCitas = element.all(by.css('app-listar-citar .ng-container'))
 

    async clickBotonCrearCita(){
        await this.linkCrearCita.click();
    };
    async clickGuardarCita(){
        await this.linkGuargarCita.click();
    };
    async clicListarCitas(){
        await this.linkListarCitas.click();
    };
    async ingresarIdentificacionUsuario(inputIdentificacionUsuario){
        await this.inputIdentificacionUsuario.sendKeys(inputIdentificacionUsuario);
    };
    async ingresarTipoCIta(inputTipoCita){
        await this.inputTipoCita.sendKeys(inputTipoCita);
    };
    async ingresarFechaInicio(inputFechaInicio){
        await this.inputFechaInicio.sendKeys(inputFechaInicio);
    };


    async clickBotonEditarCita(){
        await this.linkEditarCita.click();
    };
    async ingresarIdentificacionUsuarioEditar(inputIdentificacionUsuario){
        await this.inputIdentificacionUsuario.sendKeys(inputIdentificacionUsuario);
    };
    async ingresarTipoCItaEditar(inputTipoCitaEditar){
        await this.inputTipoCitaEditar.sendKeys(inputTipoCitaEditar);
    };
    async ingresarFechaInicioEditar(inputFechaInicioEditar){
        await this.inputFechaInicioEditar.sendKeys(inputFechaInicioEditar);
    };

    async clickBotonGuargarEditarCita(){
        await this.linkGuardarEditarCita.click();
    };


    async contarCitas(){
        return this.listaCitas.count();
    }


}