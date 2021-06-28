import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-listar-citar',
  templateUrl: './listar-citar.component.html',
  styleUrls: ['./listar-citar.component.css']
})
export class ListarCitarComponent implements OnInit {

  citas : Cita[];

  
  constructor(
    private citaService:CitaService,
    private router:Router
    ) { }

  displayedColumns: string[] = ['identificacionUsuario', 'nombreUsuario','tipoCita','fechaInicio','fechaFin','precio','editar','eliminar'];


  ngOnInit(): void {

   this.fetchUsuarios();
  }
  fetchUsuarios(){
    this.citaService.getAllCitas().subscribe(data =>{
      this.citas=data;
    })
  }

  deleteUsuario(id:number){
    this.citaService.eliminar(id).subscribe(()=>{
      
      this.fetchUsuarios();
      this.router.navigate(['/citas']);
    })
  }

 
}
