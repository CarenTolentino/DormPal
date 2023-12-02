import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DormPage } from './dorm.page';

const routes: Routes = [
  {
    path: '',
    component: DormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DormPageRoutingModule {}
