import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { getMotorcyclesByUserService } from "../../services/vehicle/getMotorcyclesByUser.service";

export const getMotorcyclesByUserController = async(req: Request, res: Response) =>{
    try {
        const userId = req.params.id

        const userCars = await getMotorcyclesByUserService(userId);
    
        return res.send(userCars);
      } catch (error) {
        if (error instanceof AppError) {
          handleError(error, res);
        }
      }
}