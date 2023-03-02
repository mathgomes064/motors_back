import { AppError, handleError } from "../../errors/appErro"
import { Response, Request } from "express"
import { userUpdateService } from "../../services/user/userUpdate.service"


export const userUpdateController = async(req: Request, res: Response) =>{
    try {
        const user = req.body
        const id = req.params.id

        const updateUser = await userUpdateService(user, id)

        return res.json({ message: "Updated user", updateUser });
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}