import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";

export const vehicleListByIdService = async (id: string) => {
    const VehicleRepository = AppDataSource.getRepository(Vehicle);
    const vehicle = await VehicleRepository.findOneBy({
      id,
    });

  return vehicle;
};
