import { Router } from "express";
import { createTaskController } from "./controllers/task/createTaskController";
import { findAllTasksController } from "./controllers/task/findAllTasksController";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

const createTask = new createTaskController();
const findTasks = new findAllTasksController();
const createUser = new CreateUserController();

router.post('/task', createTask.handle);
router.get('/tasks-list', findTasks.handle);

router.post('/register', createUser.handle)

export { router };
