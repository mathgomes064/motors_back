import { Request, Response } from "express";
import { commentDeleteService } from "../../services/comments/deleteComment.service";

const commentDeleteController = async (req: Request, res: Response) => {
  const commentId = req.params.id;

  await commentDeleteService(commentId);

  return res.status(204).send();
};

export default commentDeleteController;
