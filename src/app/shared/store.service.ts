import { Injectable } from '@angular/core';
import {ISensor} from "./interfaces/Sensor";
import {IMeasurementResponse} from './interfaces/Measurement';


@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor() { }

    public sensors: ISensor[] = [];
    public measurements: IMeasurementResponse[] = [];
    // public childrenTotalCount: number = 0;
    //public isLoading: boolean = true;
}