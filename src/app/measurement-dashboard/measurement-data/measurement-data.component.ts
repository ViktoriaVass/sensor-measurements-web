import { Component } from '@angular/core';
import {BackendService} from "../../shared/backend.service";
import {StoreService} from "../../shared/store.service";
import {IMeasurementResponse} from "../../shared/interfaces/Measurement";

@Component({
  selector: 'app-measurement-data',
  templateUrl: './measurement-data.component.html',
  styleUrls: ['./measurement-data.component.scss']
})
export class MeasurementDataComponent {

  constructor (public backendService: BackendService, public storeService: StoreService) {  }
  measurements: IMeasurementResponse[] = [];

  ngOnInit(): void {
    this.backendService.getMeasurements().subscribe(
        measurements => {
          this.measurements = measurements; // Assign the measurement to the property
        },
        error => {
          console.error('Error fetching measurements:', error);
        }
    );
  }

  get columnFields() {
    return this.columns.map(column => column.field);
  }

  columns = [
    { field: 'measurement_id', header: 'ID' },
    { field: 'humidity', header: 'Humidity' },
    { field: 'temperature', header: 'Temperature' },
    { field: 'timestamp', header: 'Timestamp' },
    { field: 'sensor_id', header: 'Sensor' },
    { field: 'delete', header: '' },
  ];

  public deleteMeasurement(measurement_id: bigint) {
    console.log("Measurement to delete ID: " + measurement_id);
    this.backendService.deleteMeasurement(measurement_id).subscribe(
        () => {
          this.measurements = this.measurements.filter(measurement => measurement.measurement_id !== measurement_id);
          console.log('Measurement deleted successfully');
        },
        error => {
          console.error('Error deleting measurement:', error);
        }
    );
  }
}
