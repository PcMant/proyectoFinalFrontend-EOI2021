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
  user:any
  constructor(private authService:AuthService, private gruposService:GruposService) {

   }

  ngOnInit(): void {
    this.user = this.authService.userData()
    console.log(this.user)
  }
  
  //método que me permite crear/añadir un documento a la colección
  createGroup(){
    let nuevogrupo:Grupo={
    nombre:"Luis",
    foto:"mira no",
    bio:"mucha info ",
    estiloMusical:["Indie"],
    esGrupo:false,
    author:this.user.uid
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
    estiloMusical:this.estilosGuardados,
    esGrupo:false,
    author:this.user.uid

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


  estilosAgrupados={
    rock:["Rock","Punk", "Metal", "SKA"],
    jazz:["Jazz","Soul","Blues","Swing"],
    pop:["Pop","HIP HOP", "Funk","Reggeaton"],
    techno:["techno","EDM","Jungle","Electro"]
    
  }

  estilosMusicales=[
    {id: 1, name: "rock"}, {id:2, name: "Punk"},{id:3, name: "SKA"},
    {id: 4, name: "Metal"}, {id:5, name: "Jazz"},{id:6, name: "Soul"},
    {id:7, name: "Blues"}, {id:8, name: "Swing"},{id:9, name: "Pop"},
    {id: 10, name: "techno"}, {id:11, name: "Punk"},{id:12, name: "Punk"},

  ]
  

/*id1:"Rock"},"Punk", "Metal", "SKA",
    "Jazz","Soul","Blues","Swing",
    "Pop","HIP HOP", "Funk","Reggeaton",
    "techno","EDM","Jungle","Electro"
    }]*/
  estilosGuardados=[]

/*Si borro el boolean y la función que le hace switch no funciona */ 
  groupVerified=false;
  
  verify():boolean{
    return !this.groupVerified
  }



  guardarEstilos(){
    console.log(this.estilosGuardados)
  }

}
