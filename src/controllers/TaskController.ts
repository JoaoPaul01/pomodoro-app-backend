import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class TaskController { 
    async findAllTasks(request: Request, response: Response) {
        const tasks = await prismaClient.task.findMany();
        return response.json(tasks);
    };

    async createTask(request: Request, response: Response) {
        const { name, description ,turn } = request.body;

        const task = await prismaClient.task.create({
            data: {
                name,
                description,
                turn,
                status: true
            }
        });

        return response.json(task)
    }

    async updateTask(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description, turn, status } = request.body;

        const taskExists = await prismaClient.user.findFirst({ where: {id} })

        if(!taskExists) {
            return response.status(400).json({ status: 400, message: 'Task does not exists.' })
        }
        
        await prismaClient.task.update({
            where: { id: Number(id) },
            data: {
                name,
                description,
                turn,
                status
            }
        });

        const tasks = await prismaClient.task.findMany();
        return response.json(tasks);
    }

    async deleteTask(request: Request, response: Response) {
        const { id } = request.params;

        const taskExists = await prismaClient.user.findFirst({ where: {id} })

        if(!taskExists) {
            return response.status(400).json({ status: 400, message: 'Task does not exists.' })
        }

        await prismaClient.task.delete({
            where: { id: Number(id) }
        });

        const tasks = await prismaClient.task.findMany();
        return response.json(tasks);
    }
}