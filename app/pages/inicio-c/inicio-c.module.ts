import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioCPageRoutingModule } from './inicio-c-routing.module';

import { InicioCPage } from './inicio-c.page';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioCPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [InicioCPage]
})
export class InicioCPageModule {}
