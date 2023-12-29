import { ISensor } from "./Sensor";

export interface IMeasurement {
    measurement_id: bigint;
    humidity: bigint;
    temperature: bigint,
    timestamp: Date;
    sensorEntity: ISensorEntity;
}

export interface ISensorEntity extends ISensor {
    sensor_id: bigint;
    name: string;
    location: string;
    isActive: boolean;
    type: string;
}