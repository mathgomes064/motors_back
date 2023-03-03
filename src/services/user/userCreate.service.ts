import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErro";
import { IAddressCreate, IUserCreate } from "../../interfaces/user";

export const userCreateService = async({
    name,
    email, 
    cpf, 
    cellPhone,
    birthDate,
    description,
    address,
    password,
    confirmPassword,
    isAdvertiser
}: IUserCreate): Promise<User> =>{
    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(Address)
    const users = await userRepository.find()

    const emailAlreadyExists = users.find((user) => user.email === email)
    
    if(emailAlreadyExists){
        throw new AppError(409, "Email Already Existis")
    }

    const addressObj = new Address()
    addressObj.cep = address.cep
    addressObj.state = address.state
    addressObj.city = address.city
    addressObj.street = address.street
    addressObj.number = address.number
    addressObj.complement = address.complement!

    await addressRepository.save(addressObj)

    const hashedPassword = await hash(password, 10);
    const hashedConfirmPassword = await hash(confirmPassword, 10)

    const newUser = userRepository.create({
        name,
        email, 
        cpf, 
        cellPhone,
        birthDate,
        description,
        address: addressObj,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword,
        isAdvertiser
    })

    await userRepository.save(newUser)

    return newUser

}
