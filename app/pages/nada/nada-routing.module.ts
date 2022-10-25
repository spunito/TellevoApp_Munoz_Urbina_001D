import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NadaPage } from './nada.page';

const routes: Routes = [
  {
    path: '',
    component: NadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NadaPageRoutingModule {}
