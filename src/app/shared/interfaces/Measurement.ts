import { ISensor } from "./Sensor";

export interface IMeasurement {
  measurement_id: number;
  sensorEntity: ISensor;
  timestamp: string;
  temperature: number;
  humidity: number;
}