import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SensorDashboardComponent} from "./sensor-dashboard/sensor-dashboard.component";
import {MeasurementDashboardComponent} from "./measurement-dashboard/measurement-dashboard.component";

const routes: Routes = [
  {path: '', component: SensorDashboardComponent},
  { path: 'sensor', component: SensorDashboardComponent },
  { path: 'measurement', component: MeasurementDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
