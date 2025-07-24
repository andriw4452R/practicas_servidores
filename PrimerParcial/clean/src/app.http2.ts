import express from 'express';
import { defensaRoutes } from './presentation/defensas/routes.memory';

const app = express();
app.use(express.json());

// Montar la ruta de defensas
app.use('/api/defensas', defensaRoutes);

export default app;


