import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { getCarsByUserService } from "../../services/vehicle/getCarByUser.service";

export const getCarsByUserController = async(req: Request, res: Response) =>{
    try {
        const userId = req.params.uuid

        const userCars = await getCarsByUserService(userId);
    
        return res.send(userCars);
      } catch (error) {
        if (error instanceof AppError) {
          handleError(error, res);
        }
      }
}