

import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/user";
import "dotenv/config";
import { AppError } from "../../errors/appErro";
import { compare } from "bcrypt";
import { AppDataSource } from "../../data-source";
import jwt from "jsonwebtoken";

const createSessionService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError(403,"Invalid email or password.");
  }

  const checkPassword = await compare(password, user.password);

  if (!checkPassword) {
    throw new AppError(403,"Invalid email or password.");
  }

  const token = jwt.sign(
    {
        name: user.name,
      email: user.email,
      cpf: user.cpf,
      isAdvertiser: user.isAdvertiser,
    },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: "5h",
    }
  );

  return { userId: user.id, isAdvertiser: user.isAdvertiser, token };
};

export default createSessionService;