import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { ISensor } from 'src/app/shared/interfaces/Sensor';
import { StoreService } from 'src/app/shared/store.service';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-sensor-add-data',
  templateUrl: './sensor-add-data.component.html',
  styleUrls: ['./sensor-add-data.component.scss']
})
export class SensorAddDataComponent implements OnInit{

  constructor(private formbuilder: FormBuilder, 
    public storeService: StoreService, 
    public backendService: BackendService,) { }

    public addSensorForm: any;
    showModal: boolean = false;

  ngOnInit(): void {
    this.addSensorForm = this.formbuilder.group({
      sensor_id: [0],  // ID will be automatically assigned in the backend
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', [Validators.required]],
      isActive: [false, [Validators.required]],
      type: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.addSensorForm.valid) {
      console.log("Sensor values: ", this.addSensorForm.value);
  
      const observer: PartialObserver<any> = {
        next: response => {
          console.log('Add Sensor Response:', response);
        },
        error: error => {
          console.error('Error adding sensor:', error);
        }
      };
  
      this.backendService.addSensor({ ...this.addSensorForm.value }).subscribe(observer);
      
    } else {
      console.log('Form validation failed. Please check the form for errors.');
    }
  }

  checkValidSensorInput() {
    if (this.addSensorForm.valid) {
        this.showModal = true;
    } else {
        this.showModal = false;
    }
    return this.showModal;
}


}
