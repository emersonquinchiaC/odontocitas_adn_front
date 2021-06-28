import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let httpMock : HttpTestingController;
  let service: UsuarioService;
  const apiEndPointUsuarioConsulta = `${environment.url}/usuarios`;
  const apiEndPointUsuarios = `${environment.url}/usuarios`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    const usuarioServes: UsuarioService = TestBed.inject(UsuarioService);
    expect(usuarioServes).toBeTruthy();
  });
  it('deberia listar usuarios', () => {
    const dummyUsuarios = [
      new Usuario(1, 'Usuario 1', '123456789'), new Usuario(2, 'Usuario 2', '987654321')
    ];
    service.getAllUsuarios().subscribe(usuarios => {
      expect(usuarios.length).toBe(2);
      expect(usuarios).toEqual(dummyUsuarios);
    });
    const req = httpMock.expectOne(apiEndPointUsuarioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsuarios);
  });
  it('deberia crear un usuario', () => {
    const dummyUsuario = new Usuario(1, 'Usuario 1', '123456789');
    service.createUsuario(dummyUsuario).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndPointUsuarios);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
  it('deberia eliminar un usuario', () => {
    new Usuario(1, 'Usuario 1', '123456789');
    service.eliminar(1).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointUsuarios}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
