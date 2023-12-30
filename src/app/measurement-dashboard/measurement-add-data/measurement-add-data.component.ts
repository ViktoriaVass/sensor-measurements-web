import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { StoreService } from "../../shared/store.service";
import { BackendService } from "../../shared/backend.service";
import { PartialObserver } from "rxjs";
import { IMeasurement } from "src/app/shared/interfaces/Measurement";  
import { ISensor } from "src/app/shared/interfaces/Sensor"; 

@Component({
  selector: 'app-measurement-add-data',
  templateUrl: './measurement-add-data.component.html',
  styleUrls: ['./measurement-add-data.component.scss']
})
export class MeasurementAddDataComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    public storeService: StoreService,
    public backendService: BackendService
  ) {}

  public addMeasurementForm: any;
  showModal: boolean = false;

  ngOnInit(): void {
    this.addMeasurementForm = this.formbuilder.group({
      measurement_id: [0],
      sensor_id: ['', Validators.required],  // Sensor ID is now a string
      timestamp: [this.getCurrentUTC()],
      humidity: ['', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern(/^\d+$/)]],
      temperature: ['', [Validators.required, Validators.min(-30), Validators.max(50), Validators.pattern(/^-?\d+$/)]],  
    });
  
  }
  

  onSubmit() {
    if (this.addMeasurementForm.valid) {
      console.log("Measurement values in OnSubmit-1: ", this.addMeasurementForm.value);
      console.log("Sensor ID in OnSubmit: ",Number(this.addMeasurementForm.value.sensor_id));
      const sensorId = this.addMeasurementForm.value.sensor_id;
      const formattedTimestamp = this.formatTimestamp(new Date(this.addMeasurementForm.value.timestamp));
  
      this.backendService.getSensorById(sensorId).subscribe(
        selectedSensor => {
          const measurementData: IMeasurement = {
            measurement_id: 0,
            sensorEntity: selectedSensor,
            timestamp: formattedTimestamp,
            temperature: +this.addMeasurementForm.value.temperature, // Konvertiert zu einer Zahl
            humidity: +this.addMeasurementForm.value.humidity, // Konvertiert zu einer Zahl
          };
          
  
          const observer: PartialObserver<any> = {
            next: response => {
              console.log('Add measurement Response:', response);
              this.backendService.getMeasurements().subscribe(data => {
                this.storeService.measurements = data;
              });
              this.addMeasurementForm.reset();
            },
            error: error => {
              console.error('Error adding measurement:', error);
            }
          };
  
          this.backendService.addMeasurement(sensorId, measurementData).subscribe(observer);
        },
        error => {
          console.log(`Error fetching sensor with ID ${sensorId}:`, error);
        }
      );
    } else {
      console.log('Form validation failed. Please check the form for errors.');
    }
  }
  
  

  checkValidMeasurementInput() {
    if (this.addMeasurementForm.valid) {
      this.showModal = true;
    } else {
      this.showModal = false;
    }
    return this.showModal;
  }

  getCurrentUTC(): string {
    const localDateTime: Date = new Date();
    const utcDateTime: Date = new Date(localDateTime.getTime() - localDateTime.getTimezoneOffset() * 60000);
    return utcDateTime.toISOString();
  }

  formatTimestamp(date: Date): string {
    return date.toISOString();
  }
  
}
