import { Injectable } from '@angular/core';
import {ISensor} from "./interfaces/Sensor";
import { IMeasurement } from './interfaces/Measurement';


@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor() { }

    public sensors: ISensor[] = [];
    public measurements: IMeasurement[] = [];
    //public children: ChildResponse[] = []
    // public childrenTotalCount: number = 0;
    //public isLoading: boolean = true;
}