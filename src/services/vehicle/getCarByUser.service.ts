import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";


export const getCarsByUserService = async(email: string) =>{
    const userRepository = AppDataSource.getRepository(User)

   const users = await userRepository.find()

   const account = users.find((user) => user.email === email)

   const onlyCars = account?.vehicle.filter((cars) => cars.type === "Carro")

   return onlyCars

}