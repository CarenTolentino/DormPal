import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule} from '@angular/forms';
import {DormPage} from './dorm.page';

import { DormPageRoutingModule} from './dorm-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DrawerComponent } from 'src/app/drawer/drawer.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DormPageRoutingModule
  ],
  declarations: [DormPage, DrawerComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class DormPageModule {}
