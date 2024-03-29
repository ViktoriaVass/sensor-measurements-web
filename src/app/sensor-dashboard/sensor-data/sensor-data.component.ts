import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';


@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.scss']
})
export class SensorDataComponent implements OnInit {

  constructor (public backendService: BackendService, public storeService: StoreService) {  }
  
  ngOnInit(): void {
    this.backendService.getSensors();
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
    this.backendService.deleteSensor(sensor_id);
  }  
}
