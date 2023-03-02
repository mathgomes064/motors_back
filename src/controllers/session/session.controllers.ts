import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { IUserLogin } from "../../interfaces/user";
import createSessionService from "../../services/session/createSession.service";


export const createSessionController = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUserLogin = req.body;
  
    const token = await createSessionService({ email, password });
  
    return res.status(200).json({token: token});
    
  } catch (err) {
    if(err instanceof AppError){
      handleError(err, res)
    }
  }
};