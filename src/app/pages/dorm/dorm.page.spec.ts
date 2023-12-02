import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DormPage } from './dorm.page';

describe('DormPage', () => {
  let component: DormPage;
  let fixture: ComponentFixture<DormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
