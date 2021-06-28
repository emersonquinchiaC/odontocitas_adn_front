import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';


import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ActualizarCitaComponent } from './components/actualizar-cita/actualizar-cita.component';
import { ListarCitarComponent } from './components/listar-citar/listar-citar.component';
import { CitaService } from './shared/service/cita.service';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
     CrearCitaComponent,
    ActualizarCitaComponent,
    ListarCitarComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers:[CitaService]
})
export class CitaModule { }
