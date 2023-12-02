import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<<< HEAD:src/app/pages/dorm/dorm-routing.module.ts
import { DormPage } from './dorm.page';
========
import { DashboardPage } from './dashboard.page';
>>>>>>>> a79c9551db0917b7f3fad982e2eccee477cad454:src/app/pages/dashboard/dashboard-routing.module.ts

const routes: Routes = [
  {
    path: '',
<<<<<<<< HEAD:src/app/pages/dorm/dorm-routing.module.ts
    component: DormPage
========
    component: DashboardPage
>>>>>>>> a79c9551db0917b7f3fad982e2eccee477cad454:src/app/pages/dashboard/dashboard-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<<< HEAD:src/app/pages/dorm/dorm-routing.module.ts
export class DormPageRoutingModule {}
========
export class DashboardPageRoutingModule {}
>>>>>>>> a79c9551db0917b7f3fad982e2eccee477cad454:src/app/pages/dashboard/dashboard-routing.module.ts
