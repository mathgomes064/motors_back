import { Vehicle } from "../../entities/vehicle.entity";
import { IVehicle, IVehicleAndUser } from "../../interfaces/vehicle";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { VehicleImages } from "../../entities/vehicleImages.entity";

export const vehicleCreateService = async({vehicle, user}: IVehicleAndUser) =>{
    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    const userRepository = AppDataSource.getRepository(User)
    const vehicleImagesRepository = AppDataSource.getRepository(VehicleImages);

    const users = await userRepository.findOne({
        where: {id: user.id}
    })


    const vehicleData = new Vehicle()
    
    try{
      vehicleData.title = vehicle.title
      vehicleData.year = vehicle.year
      vehicleData.mileage = vehicle.mileage
      vehicleData.price = vehicle.price
      vehicleData.description = vehicle.description
      vehicleData.type = vehicle.type
      vehicleData.urlImage = vehicle.urlImage
      vehicleData.created_at = new Date()
      vehicleData.owner = vehicle.owner
    }catch{
      throw Error("Dados obrigatórios faltantes")
    }

    const newVehicle = vehicleRepository.create(vehicleData)

    newVehicle.user = user

    await vehicleRepository.save(newVehicle)

    try{

      vehicle.imagesUrl.map(async (url) => {
        const newPhoto = vehicleImagesRepository.create({
          url
        });

        newPhoto.vehicle = newVehicle

        await vehicleImagesRepository.save(newPhoto);
      });
    } catch (e) {
      console.log("\n\n\n\n")
      console.log(e)
      console.log("\n\n\n\n")
      throw e
    }

    return newVehicle
}

