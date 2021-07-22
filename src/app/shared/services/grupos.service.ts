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

}
