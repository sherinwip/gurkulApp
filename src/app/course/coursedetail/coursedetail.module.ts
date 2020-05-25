import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursedetailPageRoutingModule } from './coursedetail-routing.module';

import { CoursedetailPage } from './coursedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursedetailPageRoutingModule
  ],
  declarations: [CoursedetailPage]
})
export class CoursedetailPageModule {}
