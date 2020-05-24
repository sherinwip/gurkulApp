import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsitituesignupPage } from './insitituesignup.page';

const routes: Routes = [
  {
    path: '',
    component: InsitituesignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsitituesignupPageRoutingModule {}
