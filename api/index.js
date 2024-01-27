import dotenv from "dotenv";
import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authroutes from "./routes/auth.route.js";
dotenv.config()

mongoose.connect(`${process.env.MONGO_URI}/${"Blog"}`).then(()=>{
    console.log("Mongodb connected")
})


const app=express()

app.listen(8000,(req,res)=>{
    console.log("Server is running")
})

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

// Routes

app.use('/api/auth',authroutes)
