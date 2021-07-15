import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

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
}
