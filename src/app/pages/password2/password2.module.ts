import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Password2PageRoutingModule } from './password2-routing.module';

import { Password2Page } from './password2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Password2PageRoutingModule
  ],
  declarations: [Password2Page]
})
export class Password2PageModule {}
