import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import {GoogleMapsModule} from '@angular/google-maps';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,CommonModule,FormsModule, GoogleMapsModule,HttpClientModule,
            IonicStorageModule.forRoot({
              name: 'mydb',
              driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
            }),
            provideFirebaseApp(() => initializeApp(environment.firebase)),
            provideFirestore(() => getFirestore()),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
