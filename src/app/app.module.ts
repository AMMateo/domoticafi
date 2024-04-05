import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment'; // Importa el entorno

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule , IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() => initializeApp({"projectId":"domotica-1d3d4","appId":"1:919432403576:web:c1a395016239ae61f56b8d","storageBucket":"domotica-1d3d4.appspot.com","apiKey":"AIzaSyCRFjk4y0MRv_xC3p3aA-Lh5GtMie-_k8o","authDomain":"domotica-1d3d4.firebaseapp.com","messagingSenderId":"919432403576"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}