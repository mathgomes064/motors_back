import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { Request } from "express";


const listCommentService = async (req: Request) :Promise<Comment[]> => {
  const id = req.params.id
  const commentRepository = AppDataSource.getRepository(Comment);

  let comments = await commentRepository.find({ 
    relations: ['vehicle', 'user'] 
 });



  let answare = undefined
  answare = comments.filter((comment) => comment.vehicle.id === id)
  if (answare != undefined){
    return answare
  }
 
  return []
};

export default listCommentService;
