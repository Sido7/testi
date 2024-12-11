import express, { Router, Request, Response, NextFunction } from "express";
import { createUserFunction } from "../controller/user.controller";

const router = express.Router();

router.get("/user", createUserFunction);


export default router