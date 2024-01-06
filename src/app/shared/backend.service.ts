import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StoreService} from './store.service';
import {ISensor} from './interfaces/Sensor';
import {IMeasurement} from "./interfaces/Measurement";
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({
    providedIn: 'root',
})
export class BackendService {

    constructor(public storeService: StoreService, private http: HttpClient) {
    }

    public getSensors() {
        this.http.get<ISensor[]>("http://localhost:8083/sensor").subscribe(data => {
            this.storeService.sensors = data.sort((a, b) => {
                return +a.sensor_id - +b.sensor_id;
            });
        });
    }

    public deleteSensor(sensor_id: bigint) {
        console.log("delete Sensor opened with ID: " + sensor_id);
        this.http.delete("http://localhost:8090/sensor" + `/${sensor_id}`).subscribe(_ => {
            this.getSensors();
        });
    }

    public addSensor(sensor: ISensor) {
        console.log("adding Sensor: ", sensor);
        this.http.post("http://localhost:8090/sensor", sensor).subscribe(_ => {
            this.getSensors();
        });
    }

    public updateSensor(sensor: ISensor) {
        console.log("updating Sensor: ", sensor);
        this.http.put("http://localhost:8090/sensor" + `/${sensor.sensor_id}`, sensor).subscribe(_ => {
            this.getSensors();
        });
    }

    public getMeasurements() {
        this.http.get<IMeasurement[]>("http://localhost:8083/measurement").subscribe(data => {
            this.storeService.measurements = data.sort((a, b) => {
                return +a.measurement_id - +b.measurement_id;
            });
        });
    }

    public deleteMeasurement(measurement_id: bigint) {
        console.log("delete Sensor opened with ID: " + measurement_id);
        this.http.delete("http://localhost:8090/measurement" + `/${measurement_id}`).subscribe(_ => {
            this.getMeasurements();
        });
    }

    public addMeasurement(toAdd: any) {
        console.log("adding Measurement: ", toAdd);
        console.log(toAdd.sensor);
        this.http.post("http://localhost:8090/measurement" + `/${toAdd.sensor}`, toAdd).subscribe(_ => {
            this.getMeasurements();
            }
        );
    }

    public updateMeasurement(measurement: IMeasurement) {
        console.log("updating Measurement: ", measurement);
        this.http.put("http://localhost:8090/measurement" + `/${measurement.measurement_id}`, measurement).subscribe(_ => {
            this.getMeasurements();
        });
    }
}
