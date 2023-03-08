import { Request, Response, NextFunction } from "express";

export const authAdm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdvertiser } = req.user;
  try {
    if (!isAdvertiser) {
        next();
      }    
} catch (error) {
    return res.status(403).json({message: "This route can only be accessed by the advertiser"})
}
};