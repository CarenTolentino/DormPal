import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DormprofilePageRoutingModule } from './dormprofile-routing.module';

import { DormprofilePage } from './dormprofile.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DormprofilePageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DormprofilePageModule {}
