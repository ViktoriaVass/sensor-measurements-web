import { Injectable } from '@angular/core';
import {Sensor} from "./interfaces/Sensor";


@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor() { }

    public sensors: Sensor[] = [];
    //public children: ChildResponse[] = []
    // public childrenTotalCount: number = 0;
    //public isLoading: boolean = true;
}