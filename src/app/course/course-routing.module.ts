import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePage } from './course.page';

const routes: Routes = [
  {
    path: '',
    
    component: CoursePage,
  },
  {
    path: 'coursedetail',
    children:[
      {
        path:'',
        loadChildren: () => import('./coursedetail/coursedetail.module').then( m => m.CoursedetailPageModule)
      },
      {
        path:':id',
        loadChildren: () => import('./coursedetail/coursedetail.module').then( m => m.CoursedetailPageModule)
      }

    ]
    //loadChildren: () => import('./coursedetail/coursedetail.module').then( m => m.CoursedetailPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePageRoutingModule {}
