import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordNPage } from './password-n.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordNPageRoutingModule {}
