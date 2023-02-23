import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { vehicleCreateService } from "../../services/vehicle/vehicleCreate.service";

export const vehicleCreateController = async(req: Request, res: Response) =>{
    try {
        const {title, year, mileage, price, description, type, urlImage} = req.body;

        const newVehicle = await vehicleCreateService({title, year, mileage, price, description, type, urlImage})

        return res.status(201).send(newVehicle)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}