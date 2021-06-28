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

import { ActualizarCitaComponent } from './actualizar-cita.component';

describe('ActualizarCitaComponent', () => {
  let component: ActualizarCitaComponent;
  let fixture: ComponentFixture<ActualizarCitaComponent>;
  let citaService:CitaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarCitaComponent ],
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
    fixture = TestBed.createComponent(ActualizarCitaComponent);
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
    expect(component.acrualizarCitaForm.valid).toBeFalsy;
    component.acrualizarCitaForm.controls.tipoCita.setValue('control');
    component.acrualizarCitaForm.controls.fechaInicio.setValue('2021-06-20 10:50:00');
    expect(component.acrualizarCitaForm.valid).toBeTruthy();
    
  })
});
