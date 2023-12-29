import { Component } from '@angular/core';

@Component({
  selector: 'app-sensor-dashboard',
  templateUrl: './sensor-dashboard.component.html',
  styleUrls: ['./sensor-dashboard.component.scss']
})
export class SensorDashboardComponent {

  public showAddData = true;

  toggleButtonClicked(showAddData: boolean) {
    this.showAddData=showAddData;
  }
}
