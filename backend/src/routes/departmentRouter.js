import { Router } from 'express';
import { createDepartment } from '../controllers/departmentController.js';

const router = Router();

// Tạo user

router.post('/createdepartment', createDepartment);

export default router;
