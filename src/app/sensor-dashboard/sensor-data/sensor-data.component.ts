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
    { field: 'name', header: 'Name' },
    { field: 'location', header: 'Location' },
    { field: 'isActive', header: 'Active' },
    { field: 'type', header: 'Type' },
  ];

}
