import { Router } from 'express';
import { createUser } from '../controllers/userController.js';

const router = Router();

// Tạo user

router.post('/createuser', createUser);

export default router;
