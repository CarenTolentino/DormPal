
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full'
  },
  {
    path: 'logo',
    loadChildren: () => import('./pages/logo/logo.module').then( m => m.LogoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'number',
    loadChildren: () => import('./forgotpass/number/number.module').then( m => m.NumberPageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./forgotpass/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'change',
    loadChildren: () => import('./forgotpass/change/change.module').then( m => m.ChangePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {

    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dorm',
    loadChildren: () => import('./pages/dorm/dorm.module').then( m => m.DormPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
