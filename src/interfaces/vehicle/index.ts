export interface IVehicle {
  id: string;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  type: string;
  urlImage: string;
  imagesUrl: string[];
  createdAt: Date;
}

export interface IVehicleCreate {
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  type: string;
  urlImage: string;
  owner: string
  imagesUrl: string[];
  createdAt?: Date;
}

export interface IVehicleAndUser {
  vehicle: IVehicleCreate,
  user: any
}

export interface IVehicleUpdate {
  title?: string;
  year?: string;
  mileage?: string;
  price?: string;
  description?: string;
  type?: string;
  urlImage?: string;
  createdAt?: Date;
  imagesUrl?: string[];
}


