import { Router } from "express";
import { authTokenMiddleware } from '../middlewares/authToken.middleware';

import { commentCreateController } from "../controllers/comment/commentCreate.controller";
import { listCommentsController } from "../controllers/comment/commentList.controllet";
import commentDeleteController from "../controllers/comment/commentDelete.controller";
import { commentUpdateController } from "../controllers/comment/commentUpdate.controller";
import authUserOwnCommentMiddleware from "../middlewares/authUserOwnComment.middleware";

const commentRoutes = Router();

commentRoutes.post("" , authTokenMiddleware, commentCreateController );
commentRoutes.get("/:id", listCommentsController);
commentRoutes.delete("/:id" ,authUserOwnCommentMiddleware, commentDeleteController)
commentRoutes.patch("/:id",authUserOwnCommentMiddleware, commentUpdateController)

export default commentRoutes;