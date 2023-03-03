import express from "express"
import { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appErro";
import routes from "./router/vehicle.routes";
import cors from "cors"
import vehicleRouter from "./router/vehicle.routes";
import commentRoutes from "./router/comment.routes";
import userRoutes from "./router/user.routes";
import sessionRoutes from "./router/session.routes";

const app = express()

app.use(cors())

app.use(express.json())

app.use("/vehicles", vehicleRouter);
app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/comment", commentRoutes);



export default app;