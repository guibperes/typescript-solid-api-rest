import { Router } from 'express';

import { userController } from './app/user'

const routes = Router();

routes.post('/users', (req, res) => userController.save(req, res));
routes.put('/users/:id', (req, res) => userController.updateById(req, res));
routes.delete('/users/:id', (req, res) => userController.deleteById(req, res));
routes.get('/users', (req, res) => userController.findAll(req, res));
routes.get('/users/:id', (req, res) => userController.findById(req, res));

export { routes };
