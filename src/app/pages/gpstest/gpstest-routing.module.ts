import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpstestPage } from './gpstest.page';

const routes: Routes = [
  {
    path: '',
    component: GpstestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpstestPageRoutingModule {}
