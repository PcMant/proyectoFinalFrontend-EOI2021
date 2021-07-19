import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor(private router: Router) { }

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
