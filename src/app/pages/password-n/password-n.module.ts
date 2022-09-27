import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordNPageRoutingModule } from './password-n-routing.module';

import { PasswordNPage } from './password-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordNPageRoutingModule
  ],
  declarations: [PasswordNPage]
})
export class PasswordNPageModule {}
