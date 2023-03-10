import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { AppError } from "../../errors/appErro";

export const commentDeleteService = async (id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOneBy({ id });

  if (!comment) {
    throw new AppError(404, "comment not found");
  }

  await commentRepository.delete({ id });
};
