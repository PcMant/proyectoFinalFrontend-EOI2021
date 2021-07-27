import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { EstilosComponent } from './components/estilos/estilos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TablonComponent } from './components/tablon/tablon.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { MiniprofileComponent } from './miniprofile/miniprofile.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"estilos",component:EstilosComponent},
  {path:"eventos",component:EventosComponent},
  {path:"grupos",component:GruposComponent},
  {path:"grupos/:estilo",component:GruposComponent}, // Esto es una ruta que recibe un parámetro, llamado estilo
  {path:"tablon",component:TablonComponent},
  {path:"profile",component:ProfileComponent, canActivate:[AuthGuard]},
  {path:"profile/:id",component:MiniprofileComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
