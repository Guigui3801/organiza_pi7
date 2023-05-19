import { Request, Response } from "express";
import { UpdateListService } from "../../services/toDoList/UpdateListService";

export class UpdateListController {
    async handle(req: Request, res: Response) {
        const { id, name, owner, referenceId, UnitTasks, created_at, updated_at, deleted_at } = req.body;

        const updateListService = new UpdateListService();

        try {
            const list = await updateListService.execute({
                id,
                name,
                owner,
                referenceId,
                UnitTasks,
                created_at,
                updated_at,
                deleted_at,
            });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}