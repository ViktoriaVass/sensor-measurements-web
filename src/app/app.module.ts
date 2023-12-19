import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorDashboardComponent } from './sensor-dashboard/sensor-dashboard.component';
import { MeasurementDashboardComponent } from './measurement-dashboard/measurement-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SensorDataComponent } from './sensor-dashboard/sensor-data/sensor-data.component';
import { SensorAddDataComponent } from './sensor-dashboard/sensor-add-data/sensor-add-data.component';
import { MeasurementDiagramComponent } from './measurement-dashboard/measurement-diagram/measurement-diagram.component';
import { MeasurementDataComponent } from './measurement-dashboard/measurement-data/measurement-data.component';
import { MeasurementAddDataComponent } from './measurement-dashboard/measurement-add-data/measurement-add-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorDashboardComponent,
    MeasurementDashboardComponent,
    HeaderComponent,
    SensorDataComponent,
    SensorAddDataComponent,
    MeasurementDiagramComponent,
    MeasurementDataComponent,
    MeasurementAddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
