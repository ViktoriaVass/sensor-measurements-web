import { Component } from '@angular/core';

@Component({
  selector: 'app-measurement-dashboard',
  templateUrl: './measurement-dashboard.component.html',
  styleUrls: ['./measurement-dashboard.component.scss']
})
export class MeasurementDashboardComponent {

  public showAddData = false;
  toggleButtonClicked(showAddData: boolean) {
    this.showAddData=showAddData;
  }
}
