import { Component, OnInit } from '@angular/core';
import { GruposComponent } from '../components/grupos/grupos.component';
import { Grupo } from '../shared/models/grupo';
import { AuthService } from '../shared/services/auth.service';
import { GruposService } from '../shared/services/grupos.service';

@Component({
  selector: 'miniprofile',
  templateUrl: './miniprofile.component.html',
  styleUrls: ['./miniprofile.component.scss']
})
export class MiniprofileComponent implements OnInit {
  allGroups1: Array<Grupo> = []
  myGroup: Array<Grupo> = []
    
    user:any
  constructor(private gruposService:GruposService, private authService:AuthService) { }
//private gruposComponent:GruposComponent,private authService:AuthService
  ngOnInit(): void {
    //this.todosGrupos = this.gruposComponent.loadGroups()
    //this.user = this.authService.userData()
    this.myGroup
  }


  loadGroups1(){
    this.gruposService.readAllGroups().subscribe( data=>{
      
      this.allGroups1=[]

      data.forEach((doc:any)=>{
        console.log(doc, doc.data()["bio"]);
        let grupo:Grupo={
          nombre:doc.data()["nombre"],
          foto:doc.data()["foto"],
          bio:doc.data()["bio"],
          estiloMusical:doc.data()["estiloMusical"],
          esGrupo:doc.data()["esGrupo"],
          author:doc.data()["author"]
        }
        this.allGroups1.push(grupo)

      })
    })
  }


  loadGroup1(){
    this.gruposService.readAllGroups().subscribe(data=>{
      this.myGroup=[]
      
      data.forEach((doc:any)=>{
        let grupo:Grupo=doc.data()
        //grupo=doc.data()
        this.myGroup.push(grupo)
        console.log(this.myGroup)
      })
      console.log(this.myGroup,"a ver si devuelve")
      //userGroup=myGroup.filter(grupo=>grupo.author==this.user.uid)
    })
  }
  //filtro Rock
  //for (let estilo=0;estilo<lenght(estilosGuardados),estilo++){
  //  const videos=arrayGuardadoFirebase.filter
  //}

}
