import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateListController } from "./controllers/toDoList/UpdateListController";
import { CreateListController } from "./controllers/toDoList/CreateListController";
import { CreateUnitTaskController } from "./controllers/unitTask/CreateUnitTaskController";
import { UpdateUnitTaskController } from "./controllers/unitTask/UpdateUnitTaskController";
import { GetAllUserUnitTasksController } from "./controllers/unitTask/GetAllUserUnitTasksController"; // Import the new controller


const router = Router();

//ROTAS - USER
router.post("/users", new CreateUserController().handle); //criar usuário
router.post("/session", new AuthUserController().handle); //fazer login
router.get("/userDetails", isAuthenticated, new DetailUserController().handle); // pegar dados do usuário logado na sessão
router.post("/updateList", isAuthenticated, new UpdateListController().handle); //atualizar lista
router.post("/createList", isAuthenticated, new CreateListController().handle); //criar lista
router.post("/createUnitTask", isAuthenticated, new CreateUnitTaskController().handle); //criar tarefa
router.post("/updateUnitTask", isAuthenticated, new UpdateUnitTaskController().handle); //atualizar tarefa
router.get("/userUnitTasks/:user_id", isAuthenticated, new GetAllUserUnitTasksController().handle);


export { router };
