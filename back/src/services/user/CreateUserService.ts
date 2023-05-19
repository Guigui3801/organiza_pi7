import prismaClient from "../../prisma/index";
import { User } from "../../models/user/User";
import { hash } from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';


class CreateUserService {
  async execute({ name, email, password}: User) {
    // verificar se o usuario enviou o email

    if (!email) {
      throw new Error("Sem Email");
    }

   

    //Número de 1 a 99 aleatório para a "sorte" do usuário. Reservado para uso futuro.
    const luckRNG = Math.floor(Math.random() * 98) + 1;

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
    const passwordHash = await hash(password, 10);

    // criar um usuário
    const id = uuidv4();
    const user = await prismaClient.user.create({
      data: {
        id: id,
        name: name,
        email: email,
        password: passwordHash,
        created_at: new Date(),
        updated_at: new Date(),
        luck: luckRNG,
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
