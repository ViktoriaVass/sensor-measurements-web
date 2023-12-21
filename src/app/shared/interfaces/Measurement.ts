import { ISensor } from "./Sensor";

export interface IMeasurement {
    measurement_id: bigint;
    humidity: bigint;
    temperature: bigint,
    timestamp: Date;
    sensor_id: ISensor;
}

export interface IMeasurementResponse {
    measurement_id: bigint;
    timestamp: Date;
    temprature: bigint;
    humidity: bigint;
}