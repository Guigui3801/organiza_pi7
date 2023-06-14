import prismaClient from "../../prisma/index";
import { UnitTask } from "../../models/unitTask/UnitTask";
import { v4 as uuidv4 } from 'uuid';

class CreateTask {
    async execute({ name, referenceId }: UnitTask) {
        const id = uuidv4();

        const unitTask = await prismaClient.unitTask.create({
            data: {
                id: id,
                name: name,
                referenceId: referenceId,
                created_at: new Date(),
                updated_at: new Date(),
            },
        })
    }
}

export { CreateTask }