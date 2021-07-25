import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { throwError } from 'rxjs';
import { group } from '@angular/animations';
import fireapp from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireStore: AngularFirestore, private fireAuth: AngularFireAuth, private router: Router) { }

  //añadir un usuario a firebase,debe tener los mismos campos que el modelo user, a no ser que tenga un opcional(?)
  //se crea una variable objeto en el cual se almacena los valores 
  //de la colección de firebase en las keys del objeto
  setUserData(user: any) {
    let userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
     
      
    }
    
    //aquí la lógica para almacenar la variable objeto en firebase
    //el 'users' que esta seguido de collection es la colleción creada en firebase
    return this.fireStore.collection('users').doc(user.uid).set(userData, {
      merge: true
    }).then(success => {  //si se almacena el usuario correctamente entonces hace el metodo 
      
      localStorage.setItem('user', JSON.stringify(userData));
      this.getCurrentUser(user.uid).subscribe(data => { //se obtiene los datos del usuario actual y te devuelve los datos de obtenidos de firebase/api
        this.updateLocalData(data.data())
      
      })
    })

  }
//crea una variable uid y la segunda linea obtiene la información de la colleción users del
//documento con esta uid, logicamente primero va esto y luego setUserData
  getCurrentUser(uid:string) {
   
    return this.fireStore.collection('users').doc(uid).get()
  }



  updateLocalData(user: any) {
    const data = this.userData()
    data.username = user.username||""  //como username no esta definido decimos que sino lo detecta lo guarde vacio

    localStorage.setItem('user', JSON.stringify(data));
    this.router.navigate(['/profile'])
  }


  
  //método de autentifiación con google
  googleAuth(): Promise<any> {
    return this.fireAuth.signInWithPopup(new fireapp.auth.GoogleAuthProvider())
     .then((result) => {
       localStorage.setItem('user', JSON.stringify(result.user));
       this.setUserData(result.user);
     }).catch((error) => {
      console.log(error)
        throwError(error)
     })
  }

//determina si estoy logeado y que me devuelva mi usuario
  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    if(user) {
      return true
    }
    return false
  }

  userData(): User {
    return JSON.parse(localStorage.getItem('user')!)
  }

//Cerrar sesión
  signOut() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    })
  }

}
