import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';


@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  actualizarUsuarioform:FormGroup;
  usuario:Usuario;
  identificacion: String;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private activedRoute:ActivatedRoute,
    private toast:ToastrService

    ) { 
      
   
    this.builForm()
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params)=>{
      this.identificacion= params.identificacion;
     this.usuarioService.getUsuarioPorIdentificacion(this.identificacion)
     .subscribe(user=>{
       this.actualizarUsuarioform.patchValue(user);
       this.usuario = user;
     });
   });
    
  
  }
  updateUsuario(even:Event){
    even.preventDefault();

  
    if(this.actualizarUsuarioform.valid){
      this.usuario.identificacion=this.actualizarUsuarioform.value.identificacion;
      this.usuario.nombre=this.actualizarUsuarioform.value.nombre;
      this.usuarioService.upDateUsuario(this.usuario)
      .subscribe(()=>{
        this.router.navigate(['/usuarios'])
      }, error => {
        this.toast.error(error.error.mensaje,'ERROR', { timeOut: 4000 });
        
      })
    }

  }
    
    private builForm(){      
  
    this.actualizarUsuarioform= this.formBuilder.group({
      identificacion: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
    })
  }
}
