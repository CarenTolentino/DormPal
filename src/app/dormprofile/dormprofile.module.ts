import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DormprofilePageRoutingModule } from './dormprofile-routing.module';

import { DormprofilePage } from './dormprofile.page';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DormprofilePageRoutingModule
  ],
  declarations: [DormprofilePage, ImageCarouselComponent]
})
export class DormprofilePageModule {}
