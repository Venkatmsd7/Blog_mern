import dotenv from "dotenv";
import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authroutes from "./routes/auth.route.js";
import userroutes from "./routes/user.routes.js"
import cors from "cors";
import postroutes from "./routes/post.route.js"

dotenv.config({ path: 'api/.env' })

console.log(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
console.log(`${process.env.JWT_SECRET}`);

await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`).then(()=>{
    console.log("Mongodb connected")
})


const app=express()

app.listen(8000,(req,res)=>{
    console.log("Server is running")
})
const corsOptions = {
    origin: "*", //included origin as true
    credentials: "include", //included credentials as true
};
app.use(cors(corsOptions))
app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.static("public"))

// Routes

app.use('/api/auth',authroutes)
app.use('/api/user',userroutes)
app.use('/api/post',postroutes)