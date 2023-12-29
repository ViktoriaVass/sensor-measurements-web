import { Component } from '@angular/core';
import {BackendService} from "./shared/backend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ha-web-front-end-vass-weidhofer';

  constructor(private backendService: BackendService){

  }

  ngOnInit(): void {
    this.backendService.getSensors();
    this.backendService.getMeasurements();
  }
}