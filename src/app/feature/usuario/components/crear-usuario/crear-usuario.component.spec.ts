import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { UsuarioService } from '../../shared/service/usuario.service';
import { UsuarioModule } from '../../usuario.module';
import { CrearUsuarioComponent } from './crear-usuario.component';

describe('CrearUsuarioComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;
  let usuarioService:UsuarioService;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuarioComponent ],
      imports:[
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        UsuarioModule
      ],providers:[
        UsuarioService,HttpService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'createUsuario').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Usuario valido', () => {
    expect(component.crearUsuarioform.valid).toBeFalsy();

    component.crearUsuarioform.controls.nombre.setValue('Usuario test');
    component.crearUsuarioform.controls.identificacion.setValue('123456');
    expect(component.crearUsuarioform.valid).toBeTruthy();


    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
