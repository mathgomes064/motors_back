import { Router } from "express";
import { authTokenMiddleware } from '../middlewares/authToken.middleware';

import { commentCreateController } from "../controllers/comment/commentCreate.controller";
import { listCommentsController } from "../controllers/comment/commentList.controllet";
import authOwnerUserMiddleware from "../middlewares/authOwnerUser.middleware";

const commentRoutes = Router();

commentRoutes.post("" , authTokenMiddleware, commentCreateController );
commentRoutes.get("/:id", listCommentsController);
commentRoutes.delete("/:id" ,authOwnerUserMiddleware)
commentRoutes.patch("/:id",authOwnerUserMiddleware)

export default commentRoutes;