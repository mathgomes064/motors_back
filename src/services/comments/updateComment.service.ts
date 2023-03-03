import { Comment } from "../../entities/comment.entity";
import { ICommitUpdate } from "../../interfaces/comment";
import { AppDataSource } from "../../data-source";

export const commentUpdateService = async (
  body: ICommitUpdate,
  commentId: string
) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({
    where: {
      id: commentId,
    },
  });

  if (!comment) {
    throw new Error("Comment not exists");
  }

  await commentRepository.update(commentId, body);

  return body;
};
