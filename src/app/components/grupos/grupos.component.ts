import { Component, Input, OnInit } from '@angular/core';
import { Grupo } from 'src/app/shared/models/grupo';
import { GruposService } from 'src/app/shared/services/grupos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  allGroups: Array<Grupo> = []
  public estilo: string = "";

  allGroups2: Array<Grupo> = []
  userGroupVisited: Array<Grupo> = []
  userGroup: Array<Grupo> = []
  user:any
  //visita:any
  constructor(private gruposService:GruposService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    //Este bloque es para recibir parámetros por URL en este caso solo una y lo guarda en variable estilo
    this._route.params.subscribe((params: Params) =>{
      this.estilo = params.estilo;
    });

    if(!this.estilo){
      this.loadGroups();
    }else{
      this.loadGroupsStyle(this.estilo);
    }
  }

  @Input() visita:any 
  loadGroups(){
    this.gruposService.readAllGroups().subscribe( data=>{
      
      this.allGroups=[]

      data.forEach((doc:any)=>{
        console.log(doc, doc.data()["bio"]);
        let grupo:Grupo={
          nombre:doc.data()["nombre"],
          foto:doc.data()["foto"],
          bio:doc.data()["bio"],
          estiloMusical:doc.data()["estiloMusical"],
          esGrupo:doc.data()["esGrupo"],
          author:doc.data()["author"],
        }
        this.allGroups.push(grupo)
      });
    });
  }

  loadGroupsStyle(estilo: string){
    this.gruposService.getGroupForStyle(estilo).subscribe( data=>{
      
      this.allGroups=[]

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
        this.allGroups.push(grupo)
      });
    });
  }





  visitGroup(){
   /* this.gruposService.readAllGroups().subscribe(data=>{
      this.userGroupVisited=[]
      this.userGroup=[]
      data.forEach((doc:any)=>{
        let grupo:Grupo=doc.data()
        this.userGroupVisited.push(grupo)
        console.log(this.userGroupVisited,"el grupo sale")
        console.log(this.visita,"esto que es")
      }
      )
      //this.userGroupVisited=this.userGroupVisited.filter(u=>u.nombre==this.item)
      console.log(this.userGroup,"ha salido")
    })*/
  }
}
