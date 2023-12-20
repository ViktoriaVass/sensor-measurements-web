import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from './store.service';
import { ISensor } from './interfaces/Sensor';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrl = 'http://localhost:8090/sensor'; 

  constructor(public storeService: StoreService, private http: HttpClient) {}

  public getSensors(): Observable<ISensor[]> {
    const fullUrl = this.apiUrl;
    console.log('Full URL:', fullUrl);
    return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
      map((xmlResponse: string) => {
        let jsonData: any;
        xml2js.parseString(xmlResponse, { explicitArray: false }, (error, result) => {
          if (error) {
            throw new Error('Error parsing XML response: ' + error.message);
          }
          jsonData = result;
        });

        // Adjust this part based on the actual XML structure
        const sensors = jsonData && jsonData.sensor ? jsonData.sensor : [];
        return Array.isArray(sensors) ? sensors : [sensors];
      })
    );
  }
}
