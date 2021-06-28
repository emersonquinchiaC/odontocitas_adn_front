import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', loadChildren: () => import('./feature/usuario/usuario.module').then(mod => mod.UsuarioModule) },
  { path: 'citas', loadChildren: () => import('./feature/cita/cita.module').then(mod => mod.CitaModule) },
  { path: '**',component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
