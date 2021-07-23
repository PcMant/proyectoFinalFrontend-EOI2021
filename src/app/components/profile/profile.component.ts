import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/shared/models/grupo';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GruposService } from 'src/app/shared/services/grupos.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService, private gruposService:GruposService) {
/*
    this.gruposService{
      nombre:string="";
      foto:string="";
      bio:string="";
      estiloMusical:string[];
      esGrupo=false;
  }*/
   }

  ngOnInit(): void {
  }
  
  createGroup(){
    let nuevogrupo:Grupo={
    nombre:"Luis",
    foto:"mira no",
    bio:"mucha info ",
    estiloMusical:["Indie"],
    esGrupo:false,
    }
    console.log(nuevogrupo["nombre"])
    //llamare a la funcion en gruposservice, la cual me mete un nuevo grupo al firebase
    this.gruposService.newGroup(nuevogrupo).then(success=>{
    console.log("Grupo registrado con exito",success)
    }).catch(error=>{
    console.log("Error en el registro",error)
  })
  }
  
}
