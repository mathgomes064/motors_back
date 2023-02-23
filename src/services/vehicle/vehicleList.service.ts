import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";

export const vehicleListService = async () => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = vehicleRepository.find();

  return vehicle;
};
