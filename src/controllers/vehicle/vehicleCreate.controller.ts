import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { vehicleCreateService } from "../../services/vehicle/vehicleCreate.service";

export const vehicleCreateController = async(req: Request, res: Response) =>{
    try {
        const vehicle = req.body;

        const newVehicle = await vehicleCreateService(vehicle)
        return res.status(201).send(newVehicle)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}