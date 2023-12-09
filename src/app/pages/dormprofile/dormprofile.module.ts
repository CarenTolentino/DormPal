import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DormprofilePageRoutingModule } from './dormprofile-routing.module';

import { DormprofilePage } from './dormprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DormprofilePageRoutingModule
  ],
})
export class DormprofilePageModule {}
