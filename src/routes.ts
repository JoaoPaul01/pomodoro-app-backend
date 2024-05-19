import { Router } from "express";
import { UserController } from "./controllers/UserControlller";
import { TaskController } from "./controllers/TaskController";

const router = Router();

const task = new TaskController();
const user = new UserController();

router.get('/tasks-list', task.findAllTasks);
router.post('/task', task.createTask);
router.patch('/task/:id', task.updateTask);
router.delete('/delete-task/:id', task.deleteTask);

router.post('/register', user.register)
router.post('/login')

export { router };

