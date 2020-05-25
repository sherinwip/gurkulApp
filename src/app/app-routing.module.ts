import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'entitytypeselect',
    loadChildren: () => import('./entitytypeselect/entitytypeselect.module').then( m => m.EntitytypeselectPageModule)
  },
  {
    path: 'insitituesignup',
    loadChildren: () => import('./insitiute/insitituesignup/insitituesignup.module').then( m => m.InsitituesignupPageModule)
  },
  {
    path: 'institutehome',
    loadChildren: () => import('./insitiute/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
