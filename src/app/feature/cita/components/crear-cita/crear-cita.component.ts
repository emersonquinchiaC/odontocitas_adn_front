import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  crearCitaForm:FormGroup;
  cita:Cita;
  constructor(
    private formBuilder: FormBuilder,
    private citaService: CitaService,
    private router: Router,
    private toast:ToastrService
    ) { 
    this.builForm()
  }

  ngOnInit(): void {
  }
  saveUsuario(){
    if(this.crearCitaForm.valid){
      
      this.citaService.createCita(this.crearCitaForm.value)
      .subscribe(()=>{
        this.router.navigate(['/citas'])
      }, error => {
        this.toast.error(error.error.mensaje,'ERROR', { timeOut: 4000 });
        
      })
    }

  }
    
    private builForm(){
    this.crearCitaForm= this.formBuilder.group({
      identificacionUsuario: ['', [Validators.required]],
      tipoCita: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
    })
  }

}
