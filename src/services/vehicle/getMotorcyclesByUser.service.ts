import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErro";


export const getMotorcyclesByUserService = async(email: string) =>{
    const userRepository = AppDataSource.getRepository(User)

   const users = await userRepository.find()

   const account = users.find((user) => user.email === email)

   const onlyCars = account?.vehicle.filter((cars) => cars.type === "Moto")

   return onlyCars

}