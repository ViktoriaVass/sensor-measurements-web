import {Component} from '@angular/core';
import {BackendService} from "../../shared/backend.service";
import {StoreService} from "../../shared/store.service";

@Component({
    selector: 'app-measurement-data',
    templateUrl: './measurement-data.component.html',
    styleUrls: ['./measurement-data.component.scss']
})
export class MeasurementDataComponent {

    constructor(public backendService: BackendService, public storeService: StoreService) {
    }

    ngOnInit(): void {
        this.backendService.getMeasurements();
        this.backendService.getSensors();
    }

    get columnFields() {
        return this.columns.map(column => column.field);
    }


    columns = [
        {field: 'measurement_id', header: 'ID'},
        {field: 'humidity', header: 'Luftfeuchtigkeit'},
        {field: 'temperature', header: 'Temperatur'},
        {field: 'timestamp', header: 'Zeitstempel (UTC)'},
        {field: 'sensor_id', header: 'Sensor'},
        {field: 'delete', header: ''},
    ];

    deleteMeasurement(measurement_id: bigint) {
        console.log("Measurement to delete ID: " + measurement_id);
        this.backendService.deleteMeasurement(measurement_id);
    }

    getFormattedDate(dateTimeString: number): any {
        const date = new Date(dateTimeString).toLocaleDateString('at-DE', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'UTC'
        })
        return date;
    }
}
