import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SomosPage } from './somos.page';

const routes: Routes = [
  {
    path: '',
    component: SomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SomosPageRoutingModule {}
