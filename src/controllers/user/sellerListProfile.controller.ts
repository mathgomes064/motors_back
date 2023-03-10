import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { userListProfileByIdService } from "../../services/user/userListProfileById.service";

export const sellerListProfileController = async(req: Request, res: Response) =>{
    try {
       
       const id = req.params.id

       const user = await userListProfileByIdService(id)

       return res.status(200).send(user)

    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}
