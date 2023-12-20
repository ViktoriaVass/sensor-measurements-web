import { ISensor } from "./Sensor";

export interface IMeasurement {
    measurement_id: bigint;
    humidity: bigint;
    temperature: bigint,
    timestamp: Date;
    sensor_id: bigint;
}

export interface IMeasurementResponse {
    timestamp: Date;
    temprature: bigint;
    humidity: bigint;
}