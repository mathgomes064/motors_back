import { NextFunction, Request, Response } from "express";

export const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const userId = req.user.id; 
  const accountId = req.params.userId

  try {
    if(userId == accountId){
        next()
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized"})
  }
};
