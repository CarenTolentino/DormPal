import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DormprofilePage } from './dormprofile.page';

describe('DormprofilePage', () => {
  let component: DormprofilePage;
  let fixture: ComponentFixture<DormprofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DormprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
