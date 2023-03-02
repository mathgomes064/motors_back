import { AppError, handleError } from "../../errors/appErro"
import { Request, Response } from "express"
import { userDeleteService } from "../../services/user/userDelete.service"


export const userDeleteController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const deletedClient = await userDeleteService(id)
        return res.status(204).json("");
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}