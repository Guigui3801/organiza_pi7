import prismaClient from "../../prisma";
import { UnitTask as AppUnitTask } from "../../models/unitTask/UnitTask";

class GetAllUserUnitTasksService {
  async execute(user_id: string): Promise<AppUnitTask[]> {
    const userUnitTasks = await prismaClient.unitTask.findMany({
      where: {
        referenceId: user_id,
      },
    });

    return userUnitTasks as AppUnitTask[];
  }
}


export { GetAllUserUnitTasksService };
