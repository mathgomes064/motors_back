import { AppError, handleError } from "../../errors/appErro";
import listUsersService from "../../services/user/listUsers.service";
import { Request, Response } from "express";

export const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = await listUsersService();
    return res.send(users);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
