import { Request, Response } from "express"; 
import vehicleDeleteService from "../../services/vehicle/vehicleDelete.service";

const vehicleDeleteController = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;

  await vehicleDeleteService(vehicleId);

  return res.status(204).send();
};

export default vehicleDeleteController;