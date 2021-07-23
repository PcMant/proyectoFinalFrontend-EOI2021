import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{Grupo} from "../models/grupo";

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private fireStore:AngularFirestore) { }


  readAllPost(){
    return this.fireStore.collection("grupos").get()
  }



//me entra un "grupo" (que sera el algo) de tipo "Grupo", que es una clase definida en el modal grupo
  newGroup(grupo:Grupo){
    return this.fireStore.collection("grupos").add(grupo) //lo que hace es que devuelve la colección grupos de la base de datos a la cual se le ha añadido un grupo (que sería un documento)
  }
}
