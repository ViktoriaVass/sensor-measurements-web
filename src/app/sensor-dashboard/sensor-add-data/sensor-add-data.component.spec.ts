import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorAddDataComponent } from './sensor-add-data.component';

describe('SensorAddDataComponent', () => {
  let component: SensorAddDataComponent;
  let fixture: ComponentFixture<SensorAddDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensorAddDataComponent]
    });
    fixture = TestBed.createComponent(SensorAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
