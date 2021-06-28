import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

import { ListarUsuariosComponent } from './listar-usuarios.component';

describe('ListarUsuariosComponent', () => {
  let component: ListarUsuariosComponent;
  let fixture: ComponentFixture<ListarUsuariosComponent>;
  let usuarioService: UsuarioService;
  const listaUsuarios: Usuario[] = [
    new Usuario(1, "Usuario 1", "123456789"),
    new Usuario(2, "Usuario 2", "987654321"),
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuariosComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [UsuarioService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuariosComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    fixture.detectChanges();
  });

  it('Listar todos los usuarios', ()=>{
    var spy = spyOn(usuarioService, 'getAllUsuarios').and.callFake(()=>{
        return of(listaUsuarios);
    });
    component.fetchUsuarios();
    expect(spy).toHaveBeenCalled();
});
  
});

