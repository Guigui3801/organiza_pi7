import { Request, Response } from "express";
import { CreateListService } from "../../services/toDoList/CreateListService";

export class CreateListController {
  async handle(req: Request, res: Response) {
    const { id,name,owner,referenceId,UnitTasks,created_at,updated_at,deleted_at } = req.body;

    const createListService = new CreateListService();

    try {
      const list = await createListService.execute({
        id,
        name,
        owner,
        referenceId,
        UnitTasks,
        created_at,
        updated_at,
        deleted_at,
      });
    return res.status(201).json(list);
    } catch (error) {
      // return an error response with the message
      return res.status(400).json({ message: error.message });
    }
  }
}