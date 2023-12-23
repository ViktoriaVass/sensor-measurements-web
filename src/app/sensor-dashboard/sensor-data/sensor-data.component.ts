import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { ISensor } from 'src/app/shared/interfaces/Sensor';
import { StoreService } from 'src/app/shared/store.service';


@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.scss']
})
export class SensorDataComponent implements OnInit {

  constructor (public backendService: BackendService, public storeService: StoreService) {  }
  sensors: ISensor[] = [];
  
  ngOnInit(): void {
    this.backendService.getSensors().subscribe(
      sensors => {
        this.sensors = sensors; // Assign the sensors to the property
      },
      error => {
        console.error('Error fetching sensors:', error);
      }
    );
  }

  get columnFields() {
    return this.columns.map(column => column.field);
  }

  columns = [
    { field: 'sensor_id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'location', header: 'Location' },
    { field: 'isActive', header: 'Active' },
    { field: 'type', header: 'Type' },
    { field: 'delete', header: '' },
  ];

  public deleteSensor(sensor_id: bigint) {
    console.log("Sensor to delete ID: " + sensor_id);
    this.backendService.deleteSensor(sensor_id).subscribe({
      next: () => {
        this.sensors = this.sensors.filter(sensor => sensor.sensor_id !== sensor_id);
        console.log('Sensor deleted successfully');
      },
      error: error => {
        console.error('Error deleting sensor:', error);
      }
    });
  }  
}
