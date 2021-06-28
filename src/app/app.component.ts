import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'OdontoCitas';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/citas', nombre: 'Citas' },
    { url: '/usuarios', nombre: 'Usuarios' }
    
  ];

  
}
