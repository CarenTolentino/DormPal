import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DormprofilePage } from './dormprofile.page';

const routes: Routes = [
  {
    path: '',
    component: DormprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DormprofilePageRoutingModule {}
