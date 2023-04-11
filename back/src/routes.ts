import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//ROTAS - USER
router.post("/users", new CreateUserController().handle); //criar usuário
router.post("/session", new AuthUserController().handle); //fazer login
router.get("/userDetails", isAuthenticated, new DetailUserController().handle); // pegar dados do usuário logado na sessão

export { router };
