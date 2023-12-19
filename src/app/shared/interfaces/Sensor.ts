export interface Sensor {
    sensor_id: bigint;
    is_active: boolean;
    location: string,
    name: string;
    type: string;
}

export interface SensorResponse {
    name: string;
    location: string,
    is_active: boolean;
    type: string;
}