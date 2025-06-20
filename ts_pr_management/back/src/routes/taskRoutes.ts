import { Router } from 'express';
import {
  getTasks,
  createTasks,
  updateTasksStatus,
} from '../controllers/taskControllers';
import { getUsers } from '../controllers/userControllers';

const router = Router();

router.get('/', getTasks);
router.post('/', createTasks);
router.patch('/:taskId/status', updateTasksStatus);

export default router;
