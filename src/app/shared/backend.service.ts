import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from './store.service';
import {ISensor} from './interfaces/Sensor';
import {IMeasurement} from "./interfaces/Measurement";

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  constructor(public storeService: StoreService, private http: HttpClient) {}

  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>("http://localhost:8090/sensor").pipe(
      map((jsonResponse: ISensor[]) => {
        console.log('Received JSON Response:', jsonResponse);
        return jsonResponse;
      })
    );
  }

  getSensorById(sensor_id: number): Observable<ISensor> {
    const url = `http://localhost:8090/sensor/${sensor_id}`;
    return this.http.get<ISensor>(url);
  }

  public deleteSensor(sensor_id: number): Observable<any> {
    console.log("delete Sensor opened with ID: " + sensor_id);
    return this.http.delete("http://localhost:8090/sensor" + `/${sensor_id}`);
  }

  public addSensor(sensor: ISensor): Observable<any> {
    console.log("adding Sensor: ", sensor);
    return this.http.post("http://localhost:8090/sensor", sensor);
  }
  

  public getMeasurements(): Observable<IMeasurement[]> {
    return this.http.get<IMeasurement[]>("http://localhost:8090/measurement").pipe(
        map((jsonResponse: IMeasurement[]) => {
          console.log('Received JSON Response:', jsonResponse);
          return jsonResponse;
        })
    );
  }

    public deleteMeasurement(measurement_id: number): Observable<any> {
        console.log("delete Sensor opened with ID: " + measurement_id);
        return this.http.delete("http://localhost:8090/measurement" + `/${measurement_id}`);
    }

    public addMeasurement(sensorId: number, measurement: IMeasurement): Observable<any> {
      console.log("adding Measurement in BE: ", measurement);
    
      const url = `http://localhost:8090/measurement/${sensorId}`;
      return this.http.post(url, measurement);
    }
    
}
