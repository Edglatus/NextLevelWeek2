import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Connection from '../models/Connection';
import User from '../models/User';

export default class ConnectionController
{
    public async index (request: Request, response: Response) {
        const repo = await getRepository(Connection);

        const connections = await repo.count();

        response.json({total: connections})
    }


    public async create(request: Request, response: Response){
        const { user_id } = request.body;

        const repo = await getRepository(Connection);
        const user = await getRepository(User).findOne(user_id);

        const createdConnection = await repo.create({
            user
        });

        await repo.save(createdConnection);

        return response.status(201).send();
    }
}
