import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { ISensor } from 'src/app/shared/interfaces/Sensor';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-sensor-update-data',
  templateUrl: './sensor-update-data.component.html',
  styleUrls: ['./sensor-update-data.component.scss'],
})
export class SensorUpdateDataComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    public storeService: StoreService,
    public backendService: BackendService
  ) {}

  public updateSensorForm: any;
  showUpdateModal: boolean = false;

  ngOnInit(): void {
    this.updateSensorForm = this.formbuilder.group({
      sensor_id: [0],
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', [Validators.required]],
      isActive: [false, [Validators.required]],
      type: ['', [Validators.required]],
    });

    this.backendService.getSensors();
  }

  onSensorChange() {
    const selectedSensorId = this.updateSensorForm.get('sensor_id').value;
    const selectedSensor = this.storeService.sensors.find(
      (sensor) => sensor.sensor_id === selectedSensorId
    );

    if (selectedSensor) {
      console.log("Selected sensor Name: " + selectedSensor.name);
      this.updateSensorForm.patchValue({
        name: selectedSensor.name,
        location: selectedSensor.location,
        isActive: selectedSensor.isActive,
        type: selectedSensor.type,
      });
    }
  }

  onSubmit() {
    if (this.updateSensorForm.valid) {
        console.log("Sensor values: ", this.updateSensorForm.value as ISensor);
        this.backendService.updateSensor({...this.updateSensorForm.value as ISensor});
        this.updateSensorForm.reset();

    } else {
        console.log('Form validation failed. Please check the form for errors.');
    }
  }

  checkValidSensorInput() {
    if (this.updateSensorForm.valid) {
      this.showUpdateModal = true;
    } else {
      this.showUpdateModal = false;
    }
    return this.showUpdateModal;
  }
}
