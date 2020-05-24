import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PincreationPage } from './pincreation.page';

const routes: Routes = [
  {
    path: '',
    component: PincreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PincreationPageRoutingModule {}
