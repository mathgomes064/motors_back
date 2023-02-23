import { Vehicle } from "../../entities/vehicle.entity";
import { IVehicle, IVehicleCreate } from "../../interfaces/vehicle";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../../data-source";

export const vehicleCreateService = async({title, year, mileage, price, description, type, urlImage}: IVehicleCreate) =>{
    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    const vehicle = new Vehicle()
    vehicle.title = title
    vehicle.year = year
    vehicle.mileage = mileage
    vehicle.price = price
    vehicle.description = description
    vehicle.type = type
    vehicle.urlImage = urlImage
    vehicle.created_at = new Date()

    vehicleRepository.create(vehicle)
    await vehicleRepository.save(vehicle)

    return vehicle
}

