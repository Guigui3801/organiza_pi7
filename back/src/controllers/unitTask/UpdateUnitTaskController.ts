import { Request, Response } from "express";
import { UpdateUnitTask } from "../../services/unitTask/UpdateTaskService";
export class UpdateUnitTaskController {
    
    async handle(req: Request, res: Response) {
        const { name, referenceId, completed, id, postponed, forgot, abandonned, forbidden, reference, created_at, updated_at } = req.body;
        const updateUnitTask = new UpdateUnitTask();

    try{
        const unitTask = await updateUnitTask.execute({
            id: id,
            name: name,
            referenceId: referenceId,
            completed: completed,
            postponed: postponed,
            forgot: forgot,
            abandonned: abandonned,
            forbidden: forbidden,
            reference: reference,
            created_at: created_at,
            updated_at: updated_at
        })
        return res.json(unitTask);
    }catch(e){
        console.log(e);
        return res.status
    }
    }
}

