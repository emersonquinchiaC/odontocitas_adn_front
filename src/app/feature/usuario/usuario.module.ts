import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './shared/service/usuario.service';
import { SharedModule } from '@shared/shared.module';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { ToastrModule } from 'ngx-toastr';







@NgModule({
  declarations: [
    ListarUsuariosComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),

   
  ],
  providers:[UsuarioService]
})
export class UsuarioModule { }
