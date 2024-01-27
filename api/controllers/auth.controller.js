import User from "../models/user.model.js";
import { errorHandler } from "../utils/errorhandler.js";
import bcrypt from "bcrypt";
export const signup=async(req,res,next)=>{
    const{username,email,password}=req.body
    
    if (!username||!email||!password||username===''||email===''||password===''){
        console.log(req.body)
        // next(errorHandler(400,"All fields are required"))
    }

    const hashedpaasword= bcrypt.hashSync(password,10);

    try {
        const user= await User.create({
            username,
            email,
            password
        })
        if (user) res.status(200).json(user);
    } catch (error) {
        next(errorHandler(400,"Cannot create user"))
    }

}