import express from 'express';
import { getAllCategorias } from '../controllers/categoria.controller.js';

const router = express.Router();

router.get('/categorias', getAllCategorias);

export default router;
