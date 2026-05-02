import express from "express";
import type { Application, Request, Response } from "express";
import product from "./data/product.ts";

const app: Application = express();


app.get("/" , (req: Request, res: Response)=> {
    res.send("Hello form my application")
})
app.get("/user" ,(req: Request, res: Response) => {
    console.log("Start get user")
    res.send("This is all of users")
    console.log("end get user")
})
app.get("/product", (req: Request, res: Response) => {
    console.log("Start get product")
    res.status(200).json(product)
    console.log("End get product")
})
app.get("/test", (req: Request, res: Response)=>{
    res.send(product)
})
export default app;

