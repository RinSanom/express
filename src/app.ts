import express from "express";
import type { Application, Request, Response } from "express";
import { UserData } from "./data/user-data.ts";
import { error } from "node:console";

const app: Application = express();
app.use(express.json())

app.get("/" , (req: Request, res: Response)=> {
    res.send("Hello form my application")
})
app.get("/user" ,(req: Request, res: Response) => {
    res.status(200).json(UserData);
})

app.post("/user" , (req: Request, res:Response) => {
    const { name , role } = req.body || {};
    if(!name) {
        res.status(400).json({
            error : "Name and role are required"
        })
    }
    const newUser = {
        id: UserData.length + 1,
        name,
        role
    }
    UserData.push(newUser);
    res.status(201).json(newUser);
})

app.get("/user/:search", (req: Request, res:Response) => {
    const search = req.params.search
    const user = UserData.find(user => user.id && user.name === search)
    if(!user){
        res.status(404).json({
            error : "User Not Found!"
        })
    }
    res.status(200).json(user)
})

app.delete("/user/:id", (req: Request, res:Response) => {
    const id = req.params.id
    const user = UserData.find(user => user.id && user.name === id)
})
app.put("/user/:id", (req: Request, res:Response) => {
    const id = req.params.id
    const user = UserData.find(user => user.id && user.name === id)
})
app.patch("/user/:id", (req: Request, res:Response) => {
    const id = req.params.id
    const user = UserData.find(user => user.id && user.name === id)
})

export default app;

