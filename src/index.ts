import express from "express";
import { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/",(req:Request, res:Response) => { 
    res.send("Hello from the server")
})

export default app;