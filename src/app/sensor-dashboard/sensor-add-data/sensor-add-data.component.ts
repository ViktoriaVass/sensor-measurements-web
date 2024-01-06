import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BackendService} from 'src/app/shared/backend.service';
import {StoreService} from 'src/app/shared/store.service';

@Component({
    selector: 'app-sensor-add-data',
    templateUrl: './sensor-add-data.component.html',
    styleUrls: ['./sensor-add-data.component.scss']
})
export class SensorAddDataComponent implements OnInit {

    constructor(private formbuilder: FormBuilder,
                public storeService: StoreService,
                public backendService: BackendService,) {
    }

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
            this.backendService.addSensor({...this.addSensorForm.value});
            this.addSensorForm.reset();

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
