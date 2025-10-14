import express from 'express';
import { registerAdmin, registerCaficultor, loginAdmin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register/admin', registerAdmin);
router.post('/register/caficultor', registerCaficultor);
router.post('/login', loginAdmin);

export default router;
