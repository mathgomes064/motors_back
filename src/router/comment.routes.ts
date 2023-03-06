import { Router } from "express";
import { authTokenMiddleware } from '../middlewares/authToken.middleware';

import { commentCreateController } from "../controllers/comment/commentCreate.controller";
import { listCommentsController } from "../controllers/comment/commentList.controllet";

const commentRoutes = Router();

commentRoutes.post("" ,commentCreateController );
commentRoutes.get("/:id", listCommentsController);

export default commentRoutes;