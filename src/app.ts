import express from "express"
import { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appErro";
import routes from "./router/vehicel.routes";
import cors from "cors"
import vehicleRouter from "./router/vehicel.routes";
import sessionRoutes from "./router/session.routes";

const app = express()

app.use(cors())

app.use(express.json())

app.use("/vehicles", vehicleRouter);
app.use("/login", sessionRoutes);



export default app;