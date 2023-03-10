import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";

export const commentListByIdService = async (id: string) => {
    const CommentRepository = AppDataSource.getRepository(Comment);
    const comment = await CommentRepository.findOneBy({
      id,
    });

  return comment;
};
