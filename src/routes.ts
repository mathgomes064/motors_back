import { Router } from "express";

const routes = Router();

import { vehicleCreateController } from "./controllers/vehicle/vehicleCreate.controller";
import { vehicleListController } from "./controllers/vehicle/vehicleList.controller";

routes.post("/vehicles", vehicleCreateController)
routes.get("/vehicles", vehicleListController)

export default routes
