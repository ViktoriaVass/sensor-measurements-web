import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementDashboardComponent } from './measurement-dashboard.component';

describe('MeasurementDashboardComponent', () => {
  let component: MeasurementDashboardComponent;
  let fixture: ComponentFixture<MeasurementDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementDashboardComponent]
    });
    fixture = TestBed.createComponent(MeasurementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
