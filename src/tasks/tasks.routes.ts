import { Router } from 'express';
import * as TasksController from './tasks.controller';

const router = Router();

// CREATE
router.route('/tasks').post(TasksController.createTask);

// READ
router.route('/tasks').get(TasksController.readTasksByGroupID);

// UPDATE
router.route('/tasks').put(TasksController.updateTask);

// DELETE
router.route('/tasks').delete(TasksController.deleteTask);

export default router;
