import { Router } from "express";
import { forgotPasswordController } from "../controllers/session/forgotPassword.controller";
import { createSessionController } from "../controllers/session/session.controllers";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);
sessionRoutes.post("/forgot_password", forgotPasswordController)

export default sessionRoutes;