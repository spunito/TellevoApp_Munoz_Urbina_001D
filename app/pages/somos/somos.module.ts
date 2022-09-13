import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SomosPageRoutingModule } from './somos-routing.module';

import { SomosPage } from './somos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SomosPageRoutingModule
  ],
  declarations: [SomosPage]
})
export class SomosPageModule {}
