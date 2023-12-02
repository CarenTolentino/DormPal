import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DormPageRoutingModule } from './dorm-routing.module';

import { DormPage } from './dorm.page';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DormPageRoutingModule
  ],
  declarations: [DormPage, ImageCarouselComponent,]
})
export class DormPageModule {}
