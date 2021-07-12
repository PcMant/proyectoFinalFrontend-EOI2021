import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLoged=false;
  loged():boolean{
    if(this.isLoged==false){
      return this.isLoged;
    }else{
      return this.isLoged=true;
    }
  }

  login():boolean{
    return this.isLoged=true;
  }

  signout():boolean{
    return this.isLoged=false;
  }

  invita=false;
  nachoInvita():boolean{
    return this.invita=!this.invita
  }
  
}
