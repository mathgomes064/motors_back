import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { vehicleUpdateService } from "../../services/vehicle/vehicleUpdate.service";

export const vehicleUpdateController = async (req: Request, res: Response) => {
  
  try {
    const body = req.body;
    const id = req.params.id;

    const vehicle = await vehicleUpdateService(body, id);
    return res.json({ message: "Updated Vehicle", vehicle})
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
