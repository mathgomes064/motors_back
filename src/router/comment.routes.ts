import { Router } from "express";
import { authTokenMiddleware } from '../middlewares/authToken.middleware';

import { commentCreateController } from "../controllers/comment/commentCreate.controller";
import { listCommentsController } from "../controllers/comment/commentList.controllet";
import authOwnerUserMiddleware from "../middlewares/authOwnerUser.middleware";
import commentDeleteController from "../controllers/comment/commentDelete.controller";
import { commentUpdateController } from "../controllers/comment/commentUpdate.controller";

const commentRoutes = Router();

commentRoutes.post("" , authTokenMiddleware, commentCreateController );
commentRoutes.get("/:id", listCommentsController);
commentRoutes.delete("/:id" ,authOwnerUserMiddleware, commentDeleteController)
commentRoutes.patch("/:id",authOwnerUserMiddleware, commentUpdateController)

export default commentRoutes;