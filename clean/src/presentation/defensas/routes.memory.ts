import { Router } from 'express';
import { DefensaControllerMemory } from './controller.memory';

export const defensaRoutes = Router();

defensaRoutes.get('/', DefensaControllerMemory.getAll);
