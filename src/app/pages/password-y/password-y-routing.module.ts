import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordYPage } from './password-y.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordYPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordYPageRoutingModule {}
