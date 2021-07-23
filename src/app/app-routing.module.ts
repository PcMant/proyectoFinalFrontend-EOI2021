import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { EstilosComponent } from './components/estilos/estilos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TablonComponent } from './components/tablon/tablon.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"estilos",component:EstilosComponent},
  {path:"eventos",component:EventosComponent},
  //{path:'grupos/:estilo',component:GruposComponent},
  {path:"grupos",component:GruposComponent},
  {path:"profile",component:ProfileComponent},
  {path:"tablon",component:TablonComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
