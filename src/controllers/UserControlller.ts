import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UserController {
    async register(request: Request, response: Response) {
        const { email, password } = request.body;

        const userExists = await prismaClient.user.findFirst({ where: {email} })

        if(userExists) {
            return response.status(400).json({ status: 400, message: 'Usuário já existente.' })
        } 

        const user = await prismaClient.user.create({   
            data: {
                email,
                password
            }
        })

        return response.json(user);
    }
}