import { Request, Response } from "express";
import { CreateTask } from "../../services/unitTask/CreateTaskService";

export class CreateUnitTaskController {
    
    async handle(req: Request, res: Response) {
    try{

        const { name, referenceId, completed, id, postponed, forgot, abandonned, forbidden, reference, created_at, updated_at } = req.body;
        const createTask = new CreateTask();
        const task = await createTask.execute({ name, reference, id, completed, postponed, forgot, abandonned, forbidden, referenceId, created_at, updated_at });
        return res.json(task);
    }catch(e){
        console.log(e);
        return res.status
    }
    }
}

