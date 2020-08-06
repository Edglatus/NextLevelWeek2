import { Request, Response } from 'express';

import CreateUserService from "../services/CreateUserService";
import FilterClassService from '../services/FilterClassService';

export default class ClassController
{
    public async index (request: Request, response: Response) {
        try {
            const classes = await FilterClassService(request.query)
            return response.json(classes);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }


    public async create(request: Request, response: Response){

        try {
            await CreateUserService(request.body);
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                error: 'Unexpected Error',
            });
        }
    }
}
