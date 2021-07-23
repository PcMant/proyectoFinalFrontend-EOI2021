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
  
  //método que me permite crear/añadir un documento a la colección
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
    this.gruposService.newGroup(nuevogrupo).then(success=>{ //newGroup es un método en grupo.service.ts
    console.log("Perfil registrado con exito",success)
    }).catch(error=>{
    console.log("Error en el registro",error)
  })
  }
  
  //método que me permite actualizar un documento de la colección Grupos
  updateGroup(){
  let nuevogrupo:Grupo={
    nombre:"Luis",
    foto:"mira no",
    bio:"mucha info ",
    estiloMusical:["Indie","Rock"],
    esGrupo:false,
    }
    this.gruposService.upDateGroup("htOUTzVbfqBZ3ES64pJ3",nuevogrupo).then(success=>{ //upDateGroup es un método en grupo.service.ts
      console.log("El perfi ha sido actualizado", success)
    }).catch(error=>{
      console.log("Error",error)
    })

  }

//metodo que accede al método deleteGroup0, en grupos.service.ts 
//dandole el id de un documento de la colección grupo borra dicho documento de firebase
  deleteGroup(){
    this.gruposService.deleteGroup0("fXzXXkP0ypTN8bsjuha2")
  }
}
