import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Password1PageRoutingModule } from './password1-routing.module';

import { Password1Page } from './password1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Password1PageRoutingModule
  ],
  declarations: [Password1Page]
})
export class Password1PageModule {}
