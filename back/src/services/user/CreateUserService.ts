import prismaClient from "../../prisma/index";
import { User } from "../../models/user/User";
import { hash } from "bcryptjs";


class CreateUserService {
  async execute({ name, email, password }: User) {
    // verificar se o usuario enviou o email

    if (!email) {
      throw new Error("Email Incorrect");
    }

    // caso o email já esteja cadastrado

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Usuário já existente");
    }

    // criptografando a senha
    const passwordHash = await hash(password, 8);

    // criar um usuário
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}

export { CreateUserService };
