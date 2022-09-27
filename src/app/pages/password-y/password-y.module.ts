import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordYPageRoutingModule } from './password-y-routing.module';

import { PasswordYPage } from './password-y.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordYPageRoutingModule
  ],
  declarations: [PasswordYPage]
})
export class PasswordYPageModule {}
