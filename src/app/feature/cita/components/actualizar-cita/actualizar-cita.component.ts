import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit {

  acrualizarCitaForm : FormGroup;
  cita : Cita;
  id : number;

  constructor(
    private formBuilder:FormBuilder,
    private citaservice : CitaService,
    private router :Router,
    private activedRoute : ActivatedRoute,
    private toast :ToastrService

  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params:Params)=>{
      this.id = params.id;
      this.citaservice.getCitaPorId(this.id)
      .subscribe(cit=>{
        this.acrualizarCitaForm.patchValue(cit);
        this.cita = cit;
        }, error => {
          this.toast.error(error.error.mensaje,'ERROR', { timeOut: 4000 });
          
        })
    })
  }

  updateCita(event:Event){
    event.preventDefault();

    if(this.acrualizarCitaForm.valid){

      this.cita.tipoCita = this.acrualizarCitaForm.value.tipoCita;
      this.cita.fechaInicio = this.acrualizarCitaForm.value.fechaInicio;      

      this.citaservice.updateCita(this.cita)
      .subscribe(()=>{
        this.router.navigate(['/citas']);
      })

    }
  }

  private buildForm(){
    this.acrualizarCitaForm= this.formBuilder.group({
      tipoCita: [ [Validators.required]],
      fechaInicio: [[Validators.required]],
    })
  }
}
