import { ISensor } from "./Sensor";

export interface IMeasurement {
    measurement_id: bigint;
    humidity: bigint;
    temperature: bigint,
    timestamp: Date;
    sensor_id: bigint;
}