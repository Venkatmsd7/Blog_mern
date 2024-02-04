import User from "../models/user.model.js";
import { errorHandler } from "../utils/errorhandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup=async(req,res,next)=>{
    const{username,email,password}=req.body
    
    if (!username||!email||!password||username===''||email===''||password===''){
        console.log(req.body)
        next(errorHandler(400,"All fields are required"))
    }

    const hashedpaasword= bcrypt.hashSync(password,10);

    try {
        const user= await User.create({
            username,
            email,
            password:hashedpaasword
        })
        if (user) res.status(200).json(user);
    } catch (error) {
        next(errorHandler(400,"Cannot create user"))
    }

}
export const signin= async(req,res,next)=>{
    const {email,password}=req.body
    
    try {
        
        const user= await User.findOne({email})
        if(!user){
           return next(errorHandler(400,"User not found"));
        }
        console.log(user._id)
        const validPassword= bcrypt.compareSync(password,user.password)
        if(!validPassword){
            return next(400,"invalid Password")
        }
        console.log(validPassword)

        const token= jwt.sign({
            id: user._id, 
            isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET)

        console.log(token)

        const loggedInUser=await User.findOne({email}).select('-password')
        
        res.status(200).cookie('access_token',token,{
            httpOnly:true,
        }).json(user)
    } catch (error) {
        next(error)
    }

}

export const google= async (req,res,next)=>{
    const {name,email,photoUrl}=req.body
    try {
        const user= await User.findOne({email}).select('-password')
        if (user){
            const token= jwt.sign(
                { id: user._id, isAdmin: user.isAdmin },
                process.env.JWT_SECRET
              );
        
        res.status(200)
        .cookie("access_token",token,{
            httpOnly:true
        })
        .json(user)
    }
    else{
        res.status(400)
    }
    
    }catch(error){
        console.log(error)
    }
}

export const signout=async(req,res,next)=>{
    try {

        console.log("signout started")
        res.clearCookie('access_token')
        .status(200)
        console.log("signout ended")
        
    } catch (error) {
        next(error)
    }
}
