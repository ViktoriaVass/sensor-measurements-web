import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StoreService} from "../../shared/store.service";
import {BackendService} from "../../shared/backend.service";
import {IMeasurement} from "../../shared/interfaces/Measurement";

@Component({
  selector: 'app-measurement-update-data',
  templateUrl: './measurement-update-data.component.html',
  styleUrls: ['./measurement-update-data.component.scss']
})
export class MeasurementUpdateDataComponent implements OnInit {

  constructor(
      private formbuilder: FormBuilder,
      public storeService: StoreService,
      public backendService: BackendService
  ) {
  }

  public updateMeasurementForm: any;
  showUpdateModal: boolean = false;

  ngOnInit(): void {
    this.updateMeasurementForm = this.formbuilder.group({
      measurement_id: [0],
      humidity: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      temperature: ['', [Validators.required, Validators.min(-30), Validators.max(50)]],
      timestamp: [''],
      sensor: ['', [Validators.required]],
    });

    this.backendService.getMeasurements();
    this.backendService.getSensors();
  }

  onMeasurementChange() {
    const selectedMeasurementId: number = this.updateMeasurementForm.get('measurement_id').value;
    const selectedMeasurement = this.storeService.measurements.find(
        (measurement) => measurement.measurement_id === selectedMeasurementId
    );

    if (selectedMeasurement) {
      console.log("Selected Measurement Id: " + selectedMeasurement.measurement_id);

      if (selectedMeasurement.sensorEntity) {
        this.updateMeasurementForm.patchValue({
          humidity: selectedMeasurement.humidity,
          temperature: selectedMeasurement.temperature,
          timestamp: selectedMeasurement.timestamp,
          sensor: selectedMeasurement.sensorEntity.sensor_id,
        });
      }
    }
  }

  onSubmit() {
    if (this.updateMeasurementForm.valid) {
      console.log("Measurement values: ", this.updateMeasurementForm.value as IMeasurement);
      this.backendService.updateMeasurement({...this.updateMeasurementForm.value as IMeasurement});
      this.updateMeasurementForm.reset();

    } else {
      console.log('Form validation failed. Please check the form for errors.');
    }
  }

  checkValidMeasurementInput() {
    if (this.updateMeasurementForm.valid) {
      this.showUpdateModal = true;
    } else {
      this.showUpdateModal = false;
    }
    return this.showUpdateModal;
  }
}