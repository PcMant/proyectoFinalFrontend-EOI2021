import { Component, OnInit } from '@angular/core';

type posit={titulo:string,contenido:string};
type tablon=[posit];
@Component({
  selector: 'tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.scss']
})
export class TablonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //posit={
  //  titulo="",
  //  contenido=""
  //};


  add(){
    
  }
}
