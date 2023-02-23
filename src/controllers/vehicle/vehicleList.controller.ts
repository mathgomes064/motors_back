import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { vehicleListService } from "../../services/vehicle/vehicleList.service";

export const vehicleListController = async(req: Request, res: Response) =>{
    try {
        const vehicle = await vehicleListService()

        return res.send(vehicle)
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}