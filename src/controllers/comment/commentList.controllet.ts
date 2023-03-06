import { AppError, handleError } from "../../errors/appErro";
import listCommentService from "../../services/comments/listComment.service";
import { Request, Response } from "express";

export const listCommentsController = async (req: Request, res: Response) => {
  try {
    const comments = await listCommentService(req);

    return res.send(comments);

  } catch (error) {

    if (error instanceof AppError) {
      
      handleError(error, res);
    }
  }
};
