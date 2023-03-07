import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErro";


export const getMotorcyclesByUserService = async(userId: string) =>{
    const userRepository = AppDataSource.getRepository(User)

    const idSearch = await userRepository.find();

    const idVerification = idSearch.find((id) => id.id !== userId);
  
    if (!idVerification) {
      throw new AppError(401, "Invalid Id");
    }

    const user = await userRepository.findOne({
        where: {id: userId},
        relations: {
            vehicle: true,
        }
    });

    if (!user) {
        throw new AppError(404, "vehicle doesnot exist");
    }
    
    const onlyMotorcycles = user.vehicle.filter((cars) => cars.type === "Moto")
    
    return onlyMotorcycles;

}