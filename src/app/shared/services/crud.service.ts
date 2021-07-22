import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireStore:AngularFirestore) { }

  
  //createPost debería ir en tablon.component.ts, ya que es el que nos permite crear
  //llamando en crud a las funciones que acceden a firebase
  /*createPost(){
    let post:Post={
      author:"",
      content:"",
    }

    this.crudPost.newPost(post).then( success=>{
      console.log("OK",success)
    }).catch( error=>{
      console.log("Error",error)
    })
  }*/
  
}
