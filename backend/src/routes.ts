import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from './models/User';
import ClassController from './controllers/ClassController';
import ConnectionController from './controllers/ConnectionController';

const routes = Router();

const classController = new ClassController();
const connectionController = new ConnectionController();

routes.get('/users', async (request, response) => {
    const repo = getRepository(User);
    const users = await repo.find();

    return response.json(users);
});

routes.get('/classes', classController.index);
routes.post('/classes', classController.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

export default routes;
