import { Response, Request } from "express";
import { GetAllUserUnitTasksService } from "../../services/unitTask/GetAllUserUnitTasksService";

class GetAllUserUnitTasksController {
  async handle(req: Request, res: Response) {
    const user_id = req.params.user_id;
    
    const getAllUserUnitTasksService = new GetAllUserUnitTasksService();

    const userUnitTasks = await getAllUserUnitTasksService.execute(user_id);

    return res.json(userUnitTasks);
  }
}


export { GetAllUserUnitTasksController };
