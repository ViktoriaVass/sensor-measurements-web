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
            timestamp: [this.getCurrentUTC()],
            humidity: ['', [Validators.required, Validators.pattern('^(100|\d{1,2})$')]],
            temperature: ['', [Validators.required, Validators.pattern('^(-?\d{1,2}(\.\d+)?|-\d{1,2}(\.\d+)?|50(\.0+)?)$')]],
            sensor: ['', [Validators.required]]
        })

        this.backendService.getSensors().subscribe(
            sensors => {
                this.storeService.sensors = sensors; // Assign the sensors to the property
            },
            error => {
                console.error('Error fetching sensors:', error);
            }
        );
    }

    onSubmit() {
        if (this.addMeasurementForm.valid) {
            console.log("Measurement values: ", this.addMeasurementForm.value);

            const observer: PartialObserver<any> = {
                next: response => {
                    console.log('Add measurement Response:', response);
                    this.backendService.getMeasurements().subscribe(data => {
                        this.storeService.measurements = data;
                    })
                    this.addMeasurementForm.reset();
                },
                error: error => {
                    console.error('Error adding measurement:', error);
                }
            };

            this.backendService.addMeasurement({...this.addMeasurementForm.value}).subscribe(observer);

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
