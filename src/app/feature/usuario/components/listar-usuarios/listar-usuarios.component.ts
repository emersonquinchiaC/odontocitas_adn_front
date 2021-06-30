import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  @Input() usuario:Usuario;
  usuarios : Usuario[];
  dataSource;
   
  

  
  constructor(
    private usuarioservice:UsuarioService,
    private router:Router
    ) { }

  displayedColumns: string[] = ['identificacion', 'nombre','editar','eliminar'];


  ngOnInit(): void {
   
    this.fetchUsuarios();

  }
  applyFilter(filterValue: String) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  fetchUsuarios(){
    this.usuarioservice.getAllUsuarios().subscribe(data =>{
     this.usuarios = data;
     this.dataSource = new MatTableDataSource(this.usuarios); 
     this.dataSource.filterPredicate = function(data, filter: String): boolean {
      return data.identificacion.toLowerCase().includes(filter)
      };
    })      
    
   
    
  }

  deleteUsuario(id:number){
    this.usuarioservice.eliminar(id).subscribe(()=>{
      
      this.fetchUsuarios();
      this.router.navigate(['/usuarios']);
    })
  }


}
