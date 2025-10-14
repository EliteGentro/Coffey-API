import express from 'express';
import { getContenidoByCategoria } from '../controllers/contenido.controller.js';

const router = express.Router();

router.get('/:categoriaId', getContenidoByCategoria);

export default router;
