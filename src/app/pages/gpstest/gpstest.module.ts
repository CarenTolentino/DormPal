import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpstestPageRoutingModule } from './gpstest-routing.module';

import { GpstestPage } from './gpstest.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpstestPageRoutingModule
  ],
  declarations: [GpstestPage],
})
export class GpstestPageModule {}

