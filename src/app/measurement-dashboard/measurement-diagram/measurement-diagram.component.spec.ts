import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementDiagramComponent } from './measurement-diagram.component';

describe('MeasurementDiagramComponent', () => {
  let component: MeasurementDiagramComponent;
  let fixture: ComponentFixture<MeasurementDiagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementDiagramComponent]
    });
    fixture = TestBed.createComponent(MeasurementDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
