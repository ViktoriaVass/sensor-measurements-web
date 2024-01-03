import { Component } from '@angular/core';

@Component({
  selector: 'app-sensor-dashboard',
  templateUrl: './sensor-dashboard.component.html',
  styleUrls: ['./sensor-dashboard.component.scss']
})
export class SensorDashboardComponent {

  public showAddData = false;
  public showUpdateData = false;

  toggleButtonClicked(showAddData: boolean) {
    this.showAddData=showAddData;
  }

  toggleUpdateButtonClicked(showUpdateData: boolean) {
    this.showUpdateData=showUpdateData;
  }
}
