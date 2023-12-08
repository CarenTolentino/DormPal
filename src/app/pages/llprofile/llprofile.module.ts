import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlprofilePageRoutingModule } from './llprofile-routing.module';

import { LlprofilePage } from './llprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlprofilePageRoutingModule
  ],
  declarations: [LlprofilePage]
})
export class LlprofilePageModule {}
