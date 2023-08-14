import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
import { sample_marble, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";
import marbleRouter from './routers/marble.router';
import userRouter from './routers/user.router';
import { dbConnect } from "./configs/database.config";
dbConnect();
const app = express();//app heya express application
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
  }));
  
app.use("/api/marble",marbleRouter);
app.use("/api/users",userRouter);
const port=5000;
app.listen(port ,() =>{
    console.log("website  conect to http://localhost:"+ port);
})

