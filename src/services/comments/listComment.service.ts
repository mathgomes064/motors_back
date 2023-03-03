import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";


const listCommentService = async () :Promise<Comment[]> => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comments = await commentRepository.find();
 
  return comments;
};

export default listCommentService;
