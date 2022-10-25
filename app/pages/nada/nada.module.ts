import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NadaPageRoutingModule } from './nada-routing.module';

import { NadaPage } from './nada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NadaPageRoutingModule
  ],
  declarations: [NadaPage]
})
export class NadaPageModule {}
