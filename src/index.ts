import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import authRoutes from './routes/auth.routes.js';
import contenidoRoutes from './routes/contenido.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/contenido', contenidoRoutes);
app.use('/categorias', categoriaRoutes);

// Start server
app.listen(config.server.port, () => {
  console.log(`🚀 Server running on port ${config.server.port}`);
});
