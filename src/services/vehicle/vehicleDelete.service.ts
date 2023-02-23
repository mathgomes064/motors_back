import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import { AppError } from "../../errors/appErro";

const vehicleDeleteService = async (id: string): Promise<void> => {
  const VehicleRepository = AppDataSource.getRepository(Vehicle);
  const vehicle = await VehicleRepository.findOneBy({
    id,
  });

  if (!vehicle) {
    throw new AppError(404, "Vehicle not found.");
  }

  VehicleRepository.delete(id);
};

export default vehicleDeleteService;