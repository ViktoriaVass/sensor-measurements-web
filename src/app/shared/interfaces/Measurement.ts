import { Sensor } from "./Sensor";

export interface Measurement {
    measurement_id: bigint;
    humidity: bigint;
    temperature: bigint,
    timestamp: Date;
    sensor_id: bigint;
}

export interface MeasurementResponse {
    timestamp: Date;
    temprature: bigint;
    humidity: bigint;
}