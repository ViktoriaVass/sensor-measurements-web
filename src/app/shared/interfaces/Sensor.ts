export interface ISensor {
    sensor_id: bigint;
    name: string;
    location: string,
    isActive: boolean;
    type: string;
}

export interface ISensorResponse {
    name: string;
    location: string,
    isActive: boolean;
    type: string;
}