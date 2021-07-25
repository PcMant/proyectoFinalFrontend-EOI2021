import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Postit } from 'src/app/shared/models/postit';
import { PostitService } from 'src/app/shared/services/postit.service';

@Component({
  selector: 'tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.scss']
})
export class TablonComponent implements OnInit {

  allPostit:Array<Postit>=[]
  // el this.tablonForm, el pdf dice de ponerlo fuera del 
//constructor, pero si se pone fuera peta, y se tiene que poner
//dentro del constructor porque se ejecuta el formulario al principio 
//cuando carga la página
  tablonForm:FormGroup;
  constructor(private storage: AngularFireStorage,private fb:FormBuilder, private postitService:PostitService) {
    this.tablonForm = this.fb.group({
      titulo: ['', [Validators.required]],
      contenido: ['', [Validators.required]]
  
    })
   }

 
  ngOnInit(): void {
    this.loadPostit();
  }
  
  /*Función convertida en variable para ahorrarnos escribir varias
  veces this.mForm.controls al acceder a un campo*/
  get f() {
    return this.tablonForm.controls
  }

  loadPostit(){
    this.postitService.readAllPostit().subscribe( data=>{
      
      this.allPostit=[]

      data.forEach((doc:any)=>{
        let postit:Postit={
          titulo:doc.data()["titulo"],
          contenido:doc.data()["contenido"],
        }
        this.allPostit.push(postit)//si no describo bien arriba el array AllPOstit, cuando hago push al postit este postit me da error

      })
    })
  }


  createPostit(){
    let newpostit:Postit={
      titulo:this.f.titulo.value,
      contenido:this.f.contenido.value
    }
        //codigo para subir a firebase el postit
        this.postitService.newPostit(newpostit).then(success=>{
          console.log("Postit subido",success)
          this.loadPostit()//si no pongo esta linea solo se muestra el postit si lo actualizo
              newpostit={
                titulo:"",
                contenido:""
              }
        }).catch(error=>{
          console.log("Error al subir el postit",error)
        })

  }


  updatePostit(){
    let postit:Postit={
      titulo:this.f.titulo.value,
      contenido:this.f.contenido.value
    }

    //codigo para editar en firebase el postit
  }


}
