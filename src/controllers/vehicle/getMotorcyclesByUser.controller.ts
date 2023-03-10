import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { getMotorcyclesByUserService } from "../../services/vehicle/getMotorcyclesByUser.service";

export const getMotorcyclesByUserController = async(req: Request, res: Response) =>{
  try {
    const email = req.userEmail

    const user = await getMotorcyclesByUserService(email)

    return res.status(200).send(user)

 } catch (err) {
     if(err instanceof AppError){
         handleError(err, res)
     }
 }
}