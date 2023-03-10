import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

export const userListProfileByIdService = async(id: string) =>{
   const userRepository = AppDataSource.getRepository(User)

   const users = await userRepository.find()

   const account = users.find((user) => user.id === id)

   return account
}
