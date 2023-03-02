import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/user.entity";
import { IComment, ICommentCreate } from "../../interfaces/comment";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appErro";

export const commentCreateService = async({description, id}: ICommentCreate) =>{
    const userRepository = AppDataSource.getRepository(User)
    const commentRepository = AppDataSource.getRepository(Comment)

    const user = await userRepository.findOneBy({
        id
    })

    const comment = new Comment()
    comment.description = description,
    comment.created_at = new Date(),
    user = user!


    commentRepository.create(comment)
    await commentRepository.save(comment)

    return comment
}

export default commentCreateService
