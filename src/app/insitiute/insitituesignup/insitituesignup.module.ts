import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsitituesignupPageRoutingModule } from './insitituesignup-routing.module';

import { InsitituesignupPage } from './insitituesignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsitituesignupPageRoutingModule
  ],
  declarations: [InsitituesignupPage]
})
export class InsitituesignupPageModule {}
