import express from "express";
import { Request, Response } from "express";
import userRoutes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",userRoutes.userRoutes)
// app.get("/",(req:Request, res:Response) => { 
//     res.send("Hello from the server")
// })

export default app;