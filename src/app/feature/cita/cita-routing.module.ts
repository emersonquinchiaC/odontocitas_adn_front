import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarCitaComponent } from './components/actualizar-cita/actualizar-cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitarComponent } from './components/listar-citar/listar-citar.component';

const routes: Routes = [
  {path:"",component:ListarCitarComponent},
  {path:"registrar", component:CrearCitaComponent},
  {path: "actualizar/:id", component: ActualizarCitaComponent},
  {path: "**", component:ListarCitarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
