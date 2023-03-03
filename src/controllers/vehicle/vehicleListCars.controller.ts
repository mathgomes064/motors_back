import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { vehicleListCarsService } from "../../services/vehicle/vehicleListCars.service";

export const vehicleListCarsController = async (req: Request, res: Response) => {
  try {
    const vehicle = await vehicleListCarsService();

    return res.send(vehicle);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};