import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type posit={titulo:string,contenido:string};
type tablon=[posit];


@Component({
  selector: 'tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.scss']
})
export class TablonComponent implements OnInit {
// el this.tablonForm, el pdf dice de ponerlo fuera del 
//constructor, pero si se pone fuera peta, y se tiene que poner
//dentro del constructor porque se ejecuta el formulario al principio 
//cuando carga la página
  tablonForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.tablonForm = this.fb.group({
      titulo: ['', [Validators.required]],
      contenido: ['', [Validators.required]]
  
    })
   }

 
  ngOnInit(): void {
  }
  
  /*Función convertida en variable para ahorrarnos escribir varias
veces this.mForm.controls al acceder a un campo*/
  get f() {
    return this.tablonForm.controls
  }
}



