import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password1',
    loadChildren: () => import('./pages/password1/password1.module').then( m => m.Password1PageModule)
  },
  {
    path: 'password2',
    loadChildren: () => import('./pages/password2/password2.module').then( m => m.Password2PageModule)
  },
  {
    path: 'password-y',
    loadChildren: () => import('./pages/password-y/password-y.module').then( m => m.PasswordYPageModule)
  },
  {
    path: 'password-n',
    loadChildren: () => import('./pages/password-n/password-n.module').then( m => m.PasswordNPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
