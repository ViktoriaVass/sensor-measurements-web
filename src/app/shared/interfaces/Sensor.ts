export interface ISensor {
    //sensorId: string;
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