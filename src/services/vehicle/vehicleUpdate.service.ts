import { Vehicle } from "../../entities/vehicle.entity";
import { IVehicleUpdate } from "../../interfaces/vehicle";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appErro";

export const vehicleUpdateService = async (
  body: IVehicleUpdate,
  vehicleId: string
) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: {
      id: vehicleId,
    },
  });

  if (!vehicle) {
    throw new Error("Vehicle not exists");
  }

  await vehicleRepository.update(vehicleId, body);

  return body;
};
