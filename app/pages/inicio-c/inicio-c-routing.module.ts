import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioCPage } from './inicio-c.page';

const routes: Routes = [
  {
    path: '',
    component: InicioCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioCPageRoutingModule {}
