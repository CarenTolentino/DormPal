import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { DormPageRoutingModule } from './dorm-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DormPageRoutingModule,
    SliderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DormPageModule {}
