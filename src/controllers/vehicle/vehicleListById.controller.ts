import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { vehicleListByIdService } from "../../services/vehicle/vehicleListById.service";

export const vehicleListByIdController = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  try {
    const vehicle = await vehicleListByIdService(vehicleId);

    return res.send(vehicle);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
