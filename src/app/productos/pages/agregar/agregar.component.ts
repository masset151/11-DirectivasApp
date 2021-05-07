import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  texto1:string = "Andres Masset Ruiz"
  color1:string = 'red'

  miFormulario:FormGroup = this.fb.group({
    nombre:['',Validators.required]
  });
  constructor(private fb:FormBuilder) { }

  tieneError(campo:string):boolean{
    return this.miFormulario.get(campo)?.invalid || false
  }

  cambiarNombre(){
    this.texto1 = "DON JUAN CARLOS ARAGON"
  }

  cambiarColor(){
    this.color1 = 'green'
  }

}
