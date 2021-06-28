import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

@Injectable({
  providedIn :'root'
})
export class CitaService {
  constructor(protected http: HttpService) {}

  public getAllCitas() {
    return this.http.doGet<Cita[]>(`${environment.url}/citas`, this.http.optsName('consultar citas'));
  }

  public createCita(cita: Cita) {
    return this.http.doPost<Cita, boolean>(`${environment.url}/citas`, cita,
                                                this.http.optsName('crear cita'));
  }

  public eliminar(id: Number) {
    return this.http.doDelete<boolean>(`${environment.url}/citas/${id}`,
                                                 this.http.optsName('eliminar cita'));
  }

  public updateCita(cita:Cita){
    return this.http.doPut<Cita,boolean>(`${environment.url}/citas/${cita.id}`, cita,this.http.optsName('actualizar cita'));
  }

  public getCitaPorId(id:Number) {
    return this.http.doGet<Cita>(`${environment.url}/citas/${id}`, this.http.optsName('consultar cita por id'));
  }
}
