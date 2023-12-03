import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GpstestPage } from './gpstest.page';

describe('GpstestPage', () => {
  let component: GpstestPage;
  let fixture: ComponentFixture<GpstestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GpstestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
