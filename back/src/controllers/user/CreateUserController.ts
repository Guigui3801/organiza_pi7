import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { id,name,email,password,token,authoraized,deleted,active,admin,avatar,created_at,updated_at,deleted_at } = req.body;

    const createUserService = new CreateUserService();

    try {
    const user = await createUserService.execute({
      id,
      name,
      email,
      password,
      token,
      authoraized,
      deleted,
      active,
      admin,
      avatar,
      created_at,
      updated_at,
      deleted_at,

    });

    return res.status(201).json(user);
    } catch (error) {
      // return an error response with the message
      return res.status(400).json({ message: error.message });
    }
  }
}