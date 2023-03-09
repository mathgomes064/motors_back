import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { Request } from "express";


const listCommentService = async (req: Request) :Promise<Comment[]> => {
  const id = req.params.id
  const commentRepository = AppDataSource.getRepository(Comment);

  let comments = await commentRepository.find({ 
    relations: ['vehicle', 'user'],

    where: {
      vehicle: {
        id: id
      }
    }
  });
  
  return comments
};

export default listCommentService;
