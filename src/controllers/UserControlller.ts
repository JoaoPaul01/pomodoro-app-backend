import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UserController {
    async register(request: Request, response: Response) {
        const { email, password } = request.body;

        const user = await prismaClient.user.create({
            data: {
                email,
                password
            }
        })

        return response.json(user);
    }
}