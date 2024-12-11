import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../services/user.service";

const repository = new UserRepository()
const userService = new UserService(repository)

const  createUserFunction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //const result = await userService.createUser(req.body)
        res.status(200).json({
            message : "User created successfully",
        })
        next()
    } catch (error) {
     next(error)
    }
}

export {createUserFunction}