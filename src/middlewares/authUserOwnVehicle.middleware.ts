import { Request, Response, NextFunction } from "express";
import { IUserJwt } from "../interfaces/user";
import { getUserInfo } from "../services/session/createSession.service";
import listUserByEmailService from "../services/user/listUserByEmail.service";
import vehicleListByIdService from "../services/vehicle/vehicleListById.service";

const authUserOwnVehicleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const token = req.headers.authorization
  const uuid = req.params.id
  if (token != undefined && uuid != undefined){
  
    const userInfo = await getUserInfo({token}) as IUserJwt;
    const user = await listUserByEmailService(userInfo['email']);

    const vehicle = await vehicleListByIdService(uuid)
    
    if (vehicle == undefined){
      return res.status(403).json({
        message: "Could not find vehicle",
      });
    }

    if ( user.id !== vehicle.user.id) {
      return res.status(403).json({
        message: "You don't have permission to access, update our delete other user data",
      });
    }
    return next();

  }

  return res.status(403).json({
    message: "You don't have permission to access, update our delete other user data",
  });
};

export default authUserOwnVehicleMiddleware;