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
  private apiUrl = 'http://localhost:8090/sensor'; 

  constructor(public storeService: StoreService, private http: HttpClient) {}

  public getSensors(): Observable<ISensor[]> {
    const fullUrl = this.apiUrl;
    console.log('Full URL:', fullUrl);
    
    return this.http.get<ISensor[]>(this.apiUrl).pipe(
      map((jsonResponse: ISensor[]) => {
        console.log('Received JSON Response:', jsonResponse);
        return jsonResponse;
      })
    );
  }
}
