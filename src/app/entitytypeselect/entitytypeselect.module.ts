import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntitytypeselectPageRoutingModule } from './entitytypeselect-routing.module';

import { EntitytypeselectPage } from './entitytypeselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntitytypeselectPageRoutingModule
  ],
  declarations: [EntitytypeselectPage]
})
export class EntitytypeselectPageModule {}
