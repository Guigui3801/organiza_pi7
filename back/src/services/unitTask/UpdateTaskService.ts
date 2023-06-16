import prismaClient from "../../prisma";
import { UnitTask } from "../../models/unitTask/UnitTask";

class UpdateUnitTask {
    async execute({ id, name, referenceId, completed, postponed, forgot, abandonned, forbidden }: UnitTask) {
        try{
            const unitTask = await prismaClient.unitTask.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                    referenceId: referenceId,
                    completed: completed,
                    postponed: postponed,
                    forgot: forgot,
                    abandonned: abandonned,
                    forbidden: forbidden,
                },
            });
            return unitTask;

        }
        catch(e){
            console.log(e);
        }
    }
}
export { UpdateUnitTask}