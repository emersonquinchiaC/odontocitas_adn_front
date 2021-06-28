import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  crearUsuarioform:FormGroup;
  usuario:Usuario;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private toast:ToastrService
    ) { 
    this.builForm()
  }

  ngOnInit(): void {
  }
  saveUsuario(){
    if(this.crearUsuarioform.valid){
      
      this.usuarioService.createUsuario(this.crearUsuarioform.value)
      .subscribe(()=>{
        this.router.navigate(['/usuarios'])    
      }, error => {
        this.toast.error(error.error.mensaje,'ERROR', { timeOut: 4000 });
        
      })
      
    }

  }
    
    private builForm(){
    this.crearUsuarioform= this.formBuilder.group({
      identificacion: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
    })
  }
}
