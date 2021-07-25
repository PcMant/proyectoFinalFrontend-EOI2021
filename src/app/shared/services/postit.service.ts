import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Postit } from '../models/postit';

@Injectable({
  providedIn: 'root'
})
export class PostitService {

  constructor(private fireStore:AngularFirestore) { }



  readAllPostit(){
    return this.fireStore.collection("postit").get()
  }



//me entra un "grupo" (que sera el algo) de tipo "Grupo", que es una clase definida en el modal grupo
  newPostit(postit:Postit){
    return this.fireStore.collection("postit").add(postit) //lo que hace es que devuelve la colección grupos de la base de datos a la cual se le ha añadido un grupo (que sería un documento)
  }
//entra una id que sera el identificador del documento a editar dentro de la colección "grupos",
//también entra data que es la clase un nuevogrupo:Grupo(definido en grupo.componente.ts)
  upDateGroup(id:string,postit:Postit){//con el id accedo al documento que quiero y actualizo sus campos con data
    return this.fireStore.collection("postit").doc(id).update(postit)
  }

  //método para borrar de la colección "grupos" un documento por su id
  deletePostit0(id:string){
    return this.fireStore.collection("postit").doc(id).delete()
  }




}
