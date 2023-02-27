import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { vehicleListMotorcyclesService } from "../../services/vehicle/vehicleListMotorcycles.service";

export const vehicleListMotorcyclesController = async (req: Request, res: Response) => {
  try {
    const vehicle = await vehicleListMotorcyclesService();

    return res.send(vehicle);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};