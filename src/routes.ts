import { Router } from "express";

const routes = Router();

import { vehicleCreateController } from "./controllers/vehicle/vehicleCreate.controller";
import vehicleDeleteController from "./controllers/vehicle/vehicleDelete.controller";
import { vehicleListController } from "./controllers/vehicle/vehicleList.controller";
import { vehicleListByIdController } from "./controllers/vehicle/vehicleListById.controller";
import { vehicleListCarsController } from "./controllers/vehicle/vehicleListCars.controller";
import { vehicleListMotorcyclesController } from "./controllers/vehicle/vehicleListMotorcycles.controller";
import { vehicleUpdateController } from "./controllers/vehicle/vehicleUpdate.controller";

routes.post("/vehicles", vehicleCreateController);
routes.get("/vehicles", vehicleListController);
routes.get("/vehicles/cars", vehicleListCarsController);
routes.get("/vehicles/motorcycles", vehicleListMotorcyclesController);
routes.get("/vehicles/:id", vehicleListByIdController);
routes.patch("/vehicles/:id", vehicleUpdateController);
routes.delete("/vehicles/:id", vehicleDeleteController);

export default routes;
