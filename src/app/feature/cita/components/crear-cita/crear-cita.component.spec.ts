import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { CitaModule } from '../../cita.module';
import { CitaService } from '../../shared/service/cita.service';

import { CrearCitaComponent } from './crear-cita.component';

describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;
  let citaService:CitaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCitaComponent ],
      imports:[
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        CitaModule
      
      ],
      providers:[CitaService, HttpService,ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, 'createCita').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('registrando unsa cita',()=>{
    expect(component.crearCitaForm.valid).toBeFalsy;
    component.crearCitaForm.controls.identificacionUsuario.setValue('1234');
    component.crearCitaForm.controls.tipoCita.setValue('control');
    component.crearCitaForm.controls.fechaInicio.setValue('2021-06-20 10:50:00');
    expect(component.crearCitaForm.valid).toBeTruthy();
    
  })
});
