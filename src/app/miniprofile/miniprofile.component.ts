import { Component, OnInit } from '@angular/core';
import { GruposComponent } from '../components/grupos/grupos.component';
import { Grupo } from '../shared/models/grupo';
import { AuthService } from '../shared/services/auth.service';
import { GruposService } from '../shared/services/grupos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'miniprofile',
  templateUrl: './miniprofile.component.html',
  styleUrls: ['./miniprofile.component.scss']
})
export class MiniprofileComponent implements OnInit {
  allGroups1: Array<Grupo> = []
  myGroup: Array<Grupo> = []
  userGroup: Array<Grupo> = []
  user:any
  uid: string = "";

  constructor(
    private gruposService:GruposService, 
    private authService:AuthService,
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }
//private gruposComponent:GruposComponent,private authService:AuthService
  ngOnInit(): void {
    //this.todosGrupos = this.gruposComponent.loadGroups()
    //this.user = this.authService.userData()
    this.myGroup
    this.loadGroup1()
    this.user = this.authService.userData()

    this._route.params.subscribe((params: Params) =>{
      this.uid = params.id;
    });

    if(this.uid){
      this.user.uid = this.uid;
    }
  }

  loadGroup1(){
    this.gruposService.readAllGroups().subscribe(data=>{
      this.myGroup=[]
      this.userGroup=[]
      data.forEach((doc:any)=>{
        let grupo:Grupo=doc.data()
        this.myGroup.push(grupo)
        console.log(this.myGroup,"vale")
      }
      )
      this.userGroup=this.myGroup.filter(u=>u.author==this.user.uid)
      console.log(this.userGroup,"ha salido")
    })
  }
 
}
