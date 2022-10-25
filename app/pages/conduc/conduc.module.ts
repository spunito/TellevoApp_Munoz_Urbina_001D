import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConducPageRoutingModule } from './conduc-routing.module';

import { ConducPage } from './conduc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConducPageRoutingModule
  ],
  declarations: [ConducPage]
})
export class ConducPageModule {}
