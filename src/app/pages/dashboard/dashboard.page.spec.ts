import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<<< HEAD:src/app/pages/dorm/dorm.page.spec.ts
import { DormPage } from './dorm.page';

describe('DormPage', () => {
  let component: DormPage;
  let fixture: ComponentFixture<DormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DormPage);
========
import { DashboardPage } from './dashboard.page';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardPage);
>>>>>>>> a79c9551db0917b7f3fad982e2eccee477cad454:src/app/pages/dashboard/dashboard.page.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
