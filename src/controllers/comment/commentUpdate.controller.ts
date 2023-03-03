import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { commentUpdateService } from "../../services/comments/updateComment.service";

export const commentUpdateController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const id = req.params.id;

    const comment = await commentUpdateService(body, id);
    return res.json({ message: "Updated Comment!", comment });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
