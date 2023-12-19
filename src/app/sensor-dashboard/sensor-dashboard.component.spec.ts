import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDashboardComponent } from './sensor-dashboard.component';

describe('SensorDashboardComponent', () => {
  let component: SensorDashboardComponent;
  let fixture: ComponentFixture<SensorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensorDashboardComponent]
    });
    fixture = TestBed.createComponent(SensorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
