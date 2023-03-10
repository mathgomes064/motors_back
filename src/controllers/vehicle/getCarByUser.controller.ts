import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { getCarsByUserService } from "../../services/vehicle/getCarByUser.service";

export const getCarsByUserController = async(req: Request, res: Response) =>{
  try {
    const email = req.userEmail

    const user = await getCarsByUserService(email)

    return res.status(200).send(user)

 } catch (err) {
     if(err instanceof AppError){
         handleError(err, res)
     }
 }
}