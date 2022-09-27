import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Password1Page } from './password1.page';

const routes: Routes = [
  {
    path: '',
    component: Password1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Password1PageRoutingModule {}
