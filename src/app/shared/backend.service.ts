import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from './store.service';
import { ISensor } from './interfaces/Sensor';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrlSensor = 'http://localhost:8090/sensor'; 

  constructor(public storeService: StoreService, private http: HttpClient) {}

  public getSensors(): Observable<ISensor[]> {
    
    return this.http.get<ISensor[]>(this.apiUrlSensor).pipe(
      map((jsonResponse: ISensor[]) => {
        console.log('Received JSON Response:', jsonResponse);
        return jsonResponse;
      })
    );
  }

  public deleteSensor(sensor_id: bigint): Observable<any> {
    console.log("delete Sensor openet with ID: " + sensor_id);
    return this.http.delete(this.apiUrlSensor + `/${sensor_id}`);
  }
  
  
}
