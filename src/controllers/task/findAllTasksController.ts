import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class findAllTasksController { 
    async handle(request: Request, response: Response) {
        const tasks = await prismaClient.task.findMany();
        return response.json(tasks);
    };
}