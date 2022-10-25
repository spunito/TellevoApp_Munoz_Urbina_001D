import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConducPage } from './conduc.page';

const routes: Routes = [
  {
    path: '',
    component: ConducPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConducPageRoutingModule {}
