import prismaClient from "../../prisma/index";
import { toDoList, UnitTask } from "../../models/toDoList/ToDoList";

class UpdateListService {
 
  async execute({ id, name, referenceId, UnitTasks, updated_at, deleted_at, owner }: toDoList) {
    try {
      const nestedUnitTasks = UnitTasks.map((unitTask: UnitTask) => ({
        where: { id: unitTask.id },
        data: {
          name: unitTask.name,
          created_at: unitTask.created_at,
          updated_at: unitTask.updated_at,
          deleted_at: unitTask.deleted_at,
          reference: unitTask.reference,
          referenceId: unitTask.referenceId,
          completed: { set: unitTask.completed },
          postponed: { set: unitTask.postponed },
          forgot: { set: unitTask.forgot },
          abandoned: { set: unitTask.abandonned },
          forbidden: { set: unitTask.forbidden },
        },
      }));

      const nestedOwner = {
        where: { id: owner.id },
        data: {
          name: owner.name,
          created_at: owner.created_at,
          updated_at: owner.updated_at,
          deleted_at: owner.deleted_at,
          email: owner.email,
          password: owner.password,
          token: owner.token,
          authorized: owner.authoraized,
          deleted: owner.deleted,
          active: owner.active,
          admin: owner.admin,
          avatar: owner.avatar,
        },
      };

      const list = await prismaClient.toDoList.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          referenceId: referenceId,
          UnitTasks: {
            updateMany: nestedUnitTasks,
          },
          updated_at: updated_at,
          deleted_at: deleted_at,
        },
      });

      return list;
    } catch (e) {
      console.log(e);
    }
  }
}

export { UpdateListService };
