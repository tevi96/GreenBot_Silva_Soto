import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Password2Page } from './password2.page';

const routes: Routes = [
  {
    path: '',
    component: Password2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Password2PageRoutingModule {}
