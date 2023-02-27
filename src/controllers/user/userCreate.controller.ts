import {Request, Response} from "express"
import { AppError, handleError } from "../../errors/appErro"
import { userCreateService } from "../../services/user/userCreate.service"

export const userCreateController = async(req: Request, res: Response) =>{
    try {
        const user = req.body
        const createUser = await userCreateService(user)
        return res.status(201).json({createUser});
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}
