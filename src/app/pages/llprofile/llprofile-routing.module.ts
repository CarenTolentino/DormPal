import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlprofilePage } from './llprofile.page';

const routes: Routes = [
  {
    path: '',
    component: LlprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlprofilePageRoutingModule {}
