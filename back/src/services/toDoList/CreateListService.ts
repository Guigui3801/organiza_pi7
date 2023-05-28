import prismaClient from "../../prisma/index";
import { toDoList } from "../../models/toDoList/ToDoList";
import { FullUserService } from "../user/DetailUserSevice";
import { v4 as uuidv4 } from 'uuid';

class CreateListService {
    async execute({ name,referenceId }: toDoList) {
        const id = uuidv4();
        //
        //get user data as "const userData"
        //and send it as owner : userData under data{}
        //
        const newList = await prismaClient.toDoList.create({
            data: {
                id: id,
                name: name,
                referenceId: referenceId,
                created_at: new Date(),
                updated_at: new Date(),

            },
        });
        return newList;
    }
}
export { CreateListService };