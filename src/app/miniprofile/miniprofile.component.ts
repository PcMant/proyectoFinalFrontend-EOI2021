import { Component, OnInit } from '@angular/core';
import { GruposComponent } from '../components/grupos/grupos.component';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'miniprofile',
  templateUrl: './miniprofile.component.html',
  styleUrls: ['./miniprofile.component.scss']
})
export class MiniprofileComponent implements OnInit {

    todosGrupos:any
    user:any
  constructor() { }
//private gruposComponent:GruposComponent,private authService:AuthService
  ngOnInit(): void {
    //this.todosGrupos = this.gruposComponent.loadGroups()
    //this.user = this.authService.userData()

  }

}
