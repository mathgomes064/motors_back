import { Comment } from "../../entities/comment.entity";
import { ICommentCreate } from "../../interfaces/comment";
import { AppDataSource } from "../../data-source";

export const commentCreateService = async({description, user, vehicle}: ICommentCreate) =>{
    const commentRepository = AppDataSource.getRepository(Comment)


    const comment = new Comment()
    comment.description = description,
    comment.created_at = new Date()
    
  
    const newComment = commentRepository.create(comment)

    newComment.user = user,
    newComment.vehicle = vehicle

    await commentRepository.save(newComment)

    return newComment
}

export default commentCreateService
