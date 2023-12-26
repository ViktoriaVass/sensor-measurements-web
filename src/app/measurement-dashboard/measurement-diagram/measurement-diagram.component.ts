import {Component} from '@angular/core';
import {ChartConfiguration, ChartOptions, ChartType} from 'chart.js/auto';
import {BackendService} from "../../shared/backend.service";
import {IMeasurement} from "../../shared/interfaces/Measurement";
import * as moment from 'moment';

@Component({
    selector: 'app-measurement-diagram',
    templateUrl: './measurement-diagram.component.html',
    styleUrls: ['./measurement-diagram.component.scss']
})
export class MeasurementDiagramComponent {
    measurements: IMeasurement[] = [];
    humidityData: number[] = [];
    temperatureData: number[] = [];
    timeData: String[] = [];
    public lineChartLegend = true;

    constructor(public backendService: BackendService) {
    }

    ngOnInit() {
        this.backendService.getMeasurements().subscribe(
            measurements => {
                this.measurements = measurements;
                this.processMeasurementsForChart();
                this.updateChartData(); // Aktualisiere die Diagrammdaten
            },
            error => {
                console.error('Error fetching measurements:', error);
            }
        );
    }

    processMeasurementsForChart(): void {
        this.humidityData = this.measurements.map(measurement => Number(measurement.humidity));
        this.temperatureData = this.measurements.map(measurement => Number(measurement.temperature));
        this.timeData = this.measurements.map(measurement =>
            new Date(measurement.timestamp).toLocaleDateString('at-DE', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'UTC'
            }))
    }

    public lineChartData: ChartConfiguration<'line'>['data'] = {
        labels: [], // Labels zunächst leer lassen
        datasets: [
            {
                data: [], // Daten zunächst leer lassen
                label: 'Humidity',
            },
            {
                data: [], // Daten zunächst leer lassen
                label: 'Temperature',
            }
        ]
    };

    updateChartData(): void {
        this.lineChartData = {
            labels: this.timeData,
            datasets: [
                {
                    data: this.humidityData,
                    label: 'Humidity',
                    fill: true,
                    tension: 0.5,
                    borderColor: 'rgba(0,37,148,0.72)',
                    backgroundColor: 'rgba(0,55,255,0.13)'
                },
                {
                    data: this.temperatureData,
                    label: 'Temperature',
                    fill: true,
                    tension: 0.5,
                    borderColor: 'rgba(153,0,0,0.63)',
                    backgroundColor: 'rgba(255,0,0,0.29)'
                }
            ]
        };
    }

    public lineChartOptions: ChartOptions<'line'> = {
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    stepSize: 5,
                }
            },
        }
    }
}
