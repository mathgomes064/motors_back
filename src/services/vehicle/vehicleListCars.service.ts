import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";

export const vehicleListCarsService = async () => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.find();

  const cars = vehicle.filter((vehicles) => vehicles.type === "Carro")

  return cars;
};
