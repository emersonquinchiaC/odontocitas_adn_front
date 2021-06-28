import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

import { ListarCitarComponent } from './listar-citar.component';

describe('ListarCitarComponent', () => {
  let component: ListarCitarComponent;
  let fixture: ComponentFixture<ListarCitarComponent>;
  let citaService: CitaService;
  const listaCitas: Cita[] = [
    new Cita(1,"1234","control" ,new Date (Date.now())),
    new Cita(2, "1234","control" ,new Date (Date.now())),
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCitarComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CitaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitarComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    fixture.detectChanges();
  });

  it('Listar todos las citas', ()=>{
    var spy = spyOn(citaService, 'getAllCitas').and.callFake(()=>{
        return of(listaCitas);
    });
    component.fetchUsuarios();
    expect(spy).toHaveBeenCalled();
});
  
});