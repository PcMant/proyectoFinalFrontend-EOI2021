import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EstilosComponent } from './components/estilos/estilos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { TablonComponent } from './components/tablon/tablon.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FooterComponent } from './components/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AuthService } from './shared/services/auth.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { MiniprofileComponent } from './miniprofile/miniprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    EstilosComponent,
    GruposComponent,
    EventosComponent,
    TablonComponent,
    CabeceraComponent,
    FooterComponent,
    MiniprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [
    AuthService,
    { provide: BUCKET, useValue: environment.firebaseConfig.storageBucket }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
