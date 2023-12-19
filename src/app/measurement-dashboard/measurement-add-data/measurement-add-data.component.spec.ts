import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementAddDataComponent } from './measurement-add-data.component';

describe('MeasurementAddDataComponent', () => {
  let component: MeasurementAddDataComponent;
  let fixture: ComponentFixture<MeasurementAddDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementAddDataComponent]
    });
    fixture = TestBed.createComponent(MeasurementAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
