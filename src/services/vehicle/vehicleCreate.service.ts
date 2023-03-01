import { Vehicle } from "../../entities/vehicle.entity";
import { IVehicle, IVehicleCreate } from "../../interfaces/vehicle";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

export const vehicleCreateService = async({title, year, mileage, price, description, type, urlImage, userId}: IVehicleCreate) =>{
    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.findOne({
        where: {id: userId}
    })

    const vehicle = new Vehicle()
    vehicle.title = title
    vehicle.year = year
    vehicle.mileage = mileage
    vehicle.price = price
    vehicle.description = description
    vehicle.type = type
    vehicle.urlImage = urlImage
    vehicle.created_at = new Date()
    vehicle.user = users!

    vehicleRepository.create(vehicle)
    await vehicleRepository.save(vehicle)

    return vehicle
}

