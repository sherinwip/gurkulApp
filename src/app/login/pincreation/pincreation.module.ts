import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PincreationPageRoutingModule } from './pincreation-routing.module';

import { PincreationPage } from './pincreation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PincreationPageRoutingModule
  ],
  declarations: [PincreationPage]
})
export class PincreationPageModule {}
