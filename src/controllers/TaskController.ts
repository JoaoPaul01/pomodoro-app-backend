import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class TaskController { 
    async findAllTasks(request: Request, response: Response) {
        const tasks = await prismaClient.task.findMany();
        return response.json(tasks);
    };

    async createTask(request: Request, response: Response) {
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