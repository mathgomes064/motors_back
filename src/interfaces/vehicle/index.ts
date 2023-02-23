export interface IVehicle{
    id: string;
    title: string;
    year: string;
    mileage: string;
    price: string;
    description: string;
    type: string;
    urlImage: string;
    createdAt: Date;
}

export interface IVehicleCreate{
    title: string;
    year: string;
    mileage: string;
    price: string;
    description: string;
    type: string;
    urlImage: string;
    createdAt?: Date;
}