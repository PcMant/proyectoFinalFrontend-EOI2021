import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  user:any
  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    //esto hace que si estoy logeado no me pide volver a logearme cuando
    //vuelva a lá página, tira de cookies
    if(this.authService.isLoggedIn()) {
     // this.router.navigate(['/'])//cuando estoy logeado navego hacia home
    }

    this.user = this.authService.userData() //para que nos pille el nombre de usuario en el onIgnit aparezca la el valor que devuelve la funcion UserData,y de este user me devuelva o el username(este normalmente estará vacio) o displayName
  }




  loggedVerified():boolean{
    return this.authService.isLoggedIn()
  }

  logout(){
    this.authService.signOut()
  }

  //del servicio de autentificación por private lo metemos y decimos que es por auth y es en google
  login() {
    this.authService.googleAuth().then( success => {
      console.log("Login correcto")
      this.router.navigate(['/'])
    }).catch(error => {
      console.error("Error en el login")
    })
  }

}
