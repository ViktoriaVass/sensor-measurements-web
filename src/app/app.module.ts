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
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from "@angular/material/toolbar";
import { NgChartsModule } from 'ng2-charts';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ButtonComponent } from './button/button.component';
import { SensorUpdateDataComponent } from './sensor-dashboard/sensor-update-data/sensor-update-data.component';
import { ButtonUpdateComponent } from './button-update/button-update.component';

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
    MeasurementAddDataComponent,
    ButtonComponent,
    SensorUpdateDataComponent,
    ButtonUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    NgChartsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
