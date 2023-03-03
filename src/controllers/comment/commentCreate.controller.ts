import {Request, Response} from "express"
import { userInfo } from "os";
import { User } from "../../entities/user.entity";
import { AppError, handleError } from "../../errors/appErro"
import { IUserJwt } from "../../interfaces/user";
import { commentCreateService} from "../../services/comments/createComment.service"
import { createSessionService, getUserInfo } from "../../services/session/createSession.service";
import listUserByEmailService from "../../services/user/listUserByEmail.service";
import { vehicleListByIdService } from "../../services/vehicle/vehicleListById.service";

export const commentCreateController = async(req: Request, res: Response) =>{
    //return res.status(201).json(JSON.stringify(req.headers.authorization));
    const token = req.headers.authorization?.split(" ")[1];
    let user = undefined
    if (token != undefined){
        const userInfo = await getUserInfo({token}) as IUserJwt;
        user = await listUserByEmailService(userInfo['email']);
        try {
            const description = req.body['description']
            const vehicle = await vehicleListByIdService(req.body['vehicle_id']);
            const createComment = await commentCreateService({description, user, vehicle})
            return res.status(201).json({createComment});
        } catch (err) {
            if(err instanceof AppError){
                handleError(err, res)
            }
        }
    }
    return res.status(400).json({"msg": "Erro ao processar requisição."});
}