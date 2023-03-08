import { Request, Response, NextFunction } from "express";

const authOwnerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uuid = req.params.id;
  const userId = req.user.id;

  if ( uuid !== userId) {
    return res.status(403).json({
      message: "You don't have permission to access, update our delete other user data",
    });
  }

  return next();
};

export default authOwnerUserMiddleware;