import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { userListProfileService } from "../../services/user/userListProfile.service";

export const userListProfileController = async(req: Request, res: Response) =>{
    try {
       const email = req.userEmail

       const user = await userListProfileService(email)

       return res.status(200).send(user)

    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}
