import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpMock : HttpTestingController;
  let service: CitaService;
  const apiEndPointUsuarioConsulta = `${environment.url}/citas`;
  const apiEndPointUsuarios = `${environment.url}/citas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const citaService: CitaService = TestBed.inject(CitaService);
    expect(citaService).toBeTruthy();
  });
  it('deberia listar citA', () => {
    const dummyCitas = [
      new Cita(1, '123456789','control',new Date(Date.now())), new Cita(1, '123456','urgencias',new Date(Date.now()))
    ];
    service.getAllCitas().subscribe(citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });
    const req = httpMock.expectOne(apiEndPointUsuarioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });
  it('deberia crear una cita', () => {
    const dummyCitas= new Cita(1, '123456789','control',new Date(Date.now()));
    service.createCita(dummyCitas).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndPointUsuarios);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
  it('deberia eliminar una cita', () => {
    new Cita(1, '123456789','control',new Date(Date.now()))
    service.eliminar(1).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointUsuarios}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
