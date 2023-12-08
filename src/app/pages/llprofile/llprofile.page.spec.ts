import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlprofilePage } from './llprofile.page';

describe('LlprofilePage', () => {
  let component: LlprofilePage;
  let fixture: ComponentFixture<LlprofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LlprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
