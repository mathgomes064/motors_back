import { User } from "../../entities/user.entity";
import { IToken, IUserLogin } from "../../interfaces/user";
import "dotenv/config";
import { AppError } from "../../errors/appErro";
import { compare } from "bcrypt";
import bcrypt from "bcrypt"
import { AppDataSource } from "../../data-source";
import jwt from "jsonwebtoken";

const createSessionService = async ({ email, password }: IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find((user) => user.email === email)

    if(!account){
        throw new AppError(403, "Wrong email/password")
    }

    if(!bcrypt.compareSync(password, account.password)){
        throw new Error("Wrong email/password")
    }

    
    const token = jwt.sign(
        {email: email},
        String(process.env.JWT_SECRET),
        {expiresIn: "1d"}
    )

    return token
};

const getUserInfo = async ({ token }: IToken) => {
    return jwt.verify(token, String(process.env.JWT_SECRET));
}


export {createSessionService, getUserInfo};
