import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErro";
import { IUserUpdate } from "../../interfaces/user";

export const userUpdateService = async(data: IUserUpdate, id: string) =>{
    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(Address)
    const users = await userRepository.findOneBy({id})

    if(!users){
        throw new AppError(409, "User not found")
    }
    
    if(data.password){
        const updatedPassword = await hash(data.password!, 10)
        const updatedConfirmPassword = await hash(data.confirmPassword!, 10)
        data.password = updatedPassword
        data.confirmPassword = updatedConfirmPassword
    }

    if(data.address){
        const updatedAddress = await addressRepository.update(users.address.id!, {...data.address})
    }

    delete data.address

    await userRepository.update(id, {...data})

    const user = await userRepository.findOneBy({id})

    return user!
    
}