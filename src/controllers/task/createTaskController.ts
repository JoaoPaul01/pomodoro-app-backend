import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class createTaskController {
    async handle(request: Request, response: Response) {
        const { name, turn } = request.body;

        const task = await prismaClient.task.create({
            data: {
                name,
                turn,
                status: true
            }
        });

        return response.json(task)
    }
}