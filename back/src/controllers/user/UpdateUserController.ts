import { Response, Request } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

// class UpdateUserController {
//   async handle(req: Request, res: Response) {
//     const user_id = req.user_id;
//     const name = req.name;
//     const email = req.email;
//     const password = req.password;
//     const deleted = req.deleted;
//     const active = req.active;
//     const admin = req.admin;
//     const avatar = req.avatar;
//     const updated_at = req.updated_at;
//     const deleted_at = req.deleted_at;

//     const updateUserService = new UpdateUserService();

//     const user = await updateUserService.execute(user_id, name, email, password, deleted, active, admin, avatar, updated_at, deleted_at);

//     return res.json(user);
//   }
// }
// export { UpdateUserController };
class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { user_id, name, email, password, deleted, active, admin, avatar, updated_at, deleted_at } = req.body;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute(user_id, name, email, password, deleted, active, admin, avatar, updated_at, deleted_at);

        return res.json(user);
    }
}

export { UpdateUserController };
