import prismaClient from "../../prisma";

class DetailsUserSevice {

  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    });

    return user;
  }
}
class FullUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        deleted: true,
        active: true,
        admin: true,
        avatar: true,
        created_at: true,
        updated_at: true,
        deleted_at: true,
      }
    });
  }
}

export { DetailsUserSevice, FullUserService };
