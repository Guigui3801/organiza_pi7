import prismaClient from "../../prisma/index";
import { User } from "../../models/user/User";
import { hash } from "bcryptjs";


class CreateUserService {
  async execute({ name, email, password}: User) {
    // verificar se o usuario enviou o email

    if (!email) {
      throw new Error("Sem Email");
    }

    // O data estava teimando que precisava de um ID, então fiz e função. depois fiz o fix mas decidi salvar a função
    // const maxIdValue = await prismaClient.user.findFirst({
    //   orderBy: {
    //     id: 'desc',
    //   },
    // });

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
    const user = await prismaClient.user.create({
      data: {
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
