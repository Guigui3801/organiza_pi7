import prismaClient from "../../prisma";

class DetailsUserSevice {
  
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select:{
        id: true,
        name: true,
        email: true,
      }
    });

    return user;
  }
}

export { DetailsUserSevice };
