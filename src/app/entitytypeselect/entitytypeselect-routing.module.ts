import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntitytypeselectPage } from './entitytypeselect.page';

const routes: Routes = [
  {
    path: '',
    component: EntitytypeselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitytypeselectPageRoutingModule {}
