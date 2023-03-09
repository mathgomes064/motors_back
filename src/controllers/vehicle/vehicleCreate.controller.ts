import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { IUserJwt } from "../../interfaces/user";
import { getUserInfo } from "../../services/session/createSession.service";
import listUserByEmailService from "../../services/user/listUserByEmail.service";
import { vehicleCreateService } from "../../services/vehicle/vehicleCreate.service";

export const vehicleCreateController = async(req: Request, res: Response) =>{
    const token_part = req.headers.authorization?.split(" ")
    let token = ""
    if (token_part != undefined){
        if (token_part!.length > 1){
            token = token_part[1]
        } else {
            token = token_part[0]
        }
    }
    let user = undefined
    if (token != undefined){
        const userInfo = await getUserInfo({token}) as IUserJwt;
        user = await listUserByEmailService(userInfo['email']);
        try {
            const vehicle = req.body;

            const newVehicle = await vehicleCreateService({vehicle, user})
            return res.status(201).send(newVehicle)
        } catch (error) {
            if(error instanceof AppError){
                handleError(error, res)
            }
        }
    }
    return res.status(400).json({"msg": "Erro ao processar requisição."});
}