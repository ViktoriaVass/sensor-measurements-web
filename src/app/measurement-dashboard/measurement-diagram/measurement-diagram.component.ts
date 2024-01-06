import {Component} from '@angular/core';
import {ChartConfiguration, ChartOptions} from 'chart.js/auto';
import {BackendService} from "../../shared/backend.service";
import {StoreService} from "../../shared/store.service";

@Component({
    selector: 'app-measurement-diagram',
    templateUrl: './measurement-diagram.component.html',
    styleUrls: ['./measurement-diagram.component.scss']
})
export class MeasurementDiagramComponent {
    humidityData: number[] = [];
    temperatureData: number[] = [];
    timeData: String[] = [];
    public lineChartLegend = true;

    constructor(public backendService: BackendService, public storeService: StoreService) {
    }

    ngOnInit() {
        this.backendService.getMeasurements()
        setTimeout(() => {
            this.processMeasurementsForChart();
            this.updateChartData();
        }, 5000);
    }

    processMeasurementsForChart(): void {
        this.humidityData = this.storeService.measurements.map(measurement => Number(measurement.humidity));
        this.temperatureData = this.storeService.measurements.map(measurement => Number(measurement.temperature));
        this.timeData = this.storeService.measurements.map(measurement =>

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
        labels: [],
        datasets: [
            {
                data: [],
                label: 'Humidity',
            },
            {
                data: [],
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
