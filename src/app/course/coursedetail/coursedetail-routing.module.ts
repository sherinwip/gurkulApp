import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursedetailPage } from './coursedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CoursedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursedetailPageRoutingModule {}
