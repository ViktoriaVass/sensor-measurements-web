import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StoreService} from "../../shared/store.service";
import {BackendService} from "../../shared/backend.service";
import {PartialObserver} from "rxjs";

@Component({
    selector: 'app-measurement-add-data',
    templateUrl: './measurement-add-data.component.html',
    styleUrls: ['./measurement-add-data.component.scss']
})
export class MeasurementAddDataComponent implements OnInit {

    constructor(private formbuilder: FormBuilder,
                public storeService: StoreService,
                public backendService: BackendService,) {
    }

    public addMeasurementForm: any;
    showModal: boolean = false;

    ngOnInit(): void {
        this.addMeasurementForm = this.formbuilder.group({
            measurement_id: [0],  // ID will be automatically assigned in the backend
            timestamp: [],
            humidity: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
            temperature: ['', [Validators.required, Validators.min(-30), Validators.max(50)]],
            sensor: ['', [Validators.required]]
        })

        this.backendService.getSensors();
    }

    onSubmit() {
        if (this.addMeasurementForm.valid) {
            console.log("Measurement values: ", this.addMeasurementForm.value);
            this.backendService.addMeasurement({...this.addMeasurementForm.value});
            this.addMeasurementForm.reset();

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

    getCurrentUTC(): String {
        const localDateTime: Date = new Date();
        const utcDateTime: Date = new Date(localDateTime.getTime() - localDateTime.getTimezoneOffset() * 60000);
        return utcDateTime.toISOString();
    }

}
