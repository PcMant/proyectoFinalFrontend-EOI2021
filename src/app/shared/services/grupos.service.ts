import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{Grupo} from "../models/grupo";

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private fireStore:AngularFirestore, ) { }


  readAllGroups(){
    return this.fireStore.collection("grupos").get()
  }
    //esta sería una función para leer pero de momento no la usaremos
   // getGroup(user){
    //  return this.fireStore.collection("grupos").doc(user).get
    //}

    /** Hace una consulta a firebase y lee unicamente los grupos que tengan un estilo en  concreto mediante consulta 
     * array-contains es como un operador que busca coincidencias en el array estiloMusical que se encuentra en la colección grupos
     * utilizando el parámetro estilo para filtrarlo
    */
    getGroupForStyle(estilo: string){
      return this.fireStore.collection('grupos', ref => ref.where('estiloMusical', 'array-contains', estilo)).get();
    }

    /** Filtrado de grupos por author mediante consulta */
    getGroupForAuthor(uid: string){
      return this.fireStore.collection('grupos', ref => ref.where('author', '==', uid)).get();
    }
//me entra un "grupo" (que sera el algo) de tipo "Grupo", que es una clase definida en el modal grupo
  newGroup(grupo:Grupo){
    return this.fireStore.collection("grupos").add(grupo) //lo que hace es que devuelve la colección grupos de la base de datos a la cual se le ha añadido un grupo (que sería un documento)
  }
//entra una id que sera el identificador del documento a editar dentro de la colección "grupos",
//también entra data que es la clase un nuevogrupo:Grupo(definido en grupo.componente.ts)
  upDateGroup(id:string,data:Grupo){//con el id accedo al documento que quiero y actualizo sus campos con data
    return this.fireStore.collection("grupos").doc(id).update(data)
  }

  //método para borrar de la colección "grupos" un documento por su id
  deleteGroup0(id:string){
    return this.fireStore.collection("grupos").doc(id).delete()
  }


}
