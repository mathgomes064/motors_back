import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";

const vehicleListByIdService = async (id: string) => {
    const VehicleRepository = AppDataSource.getRepository(Vehicle);
    const vehicle = await VehicleRepository.findOne( {
        where: {
            id
        },
        relations: {
            user: true,
        },
    });
    if (vehicle != undefined){
        return vehicle;
    }
    throw Error("Vehicle not found.")
};

export default vehicleListByIdService;