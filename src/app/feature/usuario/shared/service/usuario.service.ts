import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable()
export class UsuarioService {

  constructor(protected http: HttpService) {}

  public getAllUsuarios() {
    return this.http.doGet<Usuario[]>(`${environment.url}/usuarios`, this.http.optsName('consultar usuarios'));
  }

  public createUsuario(usuario: Usuario) {
    return this.http.doPost<Usuario, boolean>(`${environment.url}/usuarios`, usuario,
                                                this.http.optsName('crear/actualizar usuarios'));
  }

  public eliminar(id: Number) {
    return this.http.doDelete<boolean>(`${environment.url}/usuarios/${id}`,
                                                 this.http.optsName('eliminar usuarios'));
  }

  public getUsuarioPorIdentificacion(identificacion:String){

    return this.http.doGet<Usuario>(`${environment.url}/usuarios/${identificacion}`, this.http.optsName('consultar usuarios'));
  }
  public upDateUsuario(usuario:Usuario){

    return this.http.doPut<Usuario, boolean>(`${environment.url}/usuarios/${usuario.id}`, usuario,this.http.optsName('consultar usuario por identificacion'));
  }
}
