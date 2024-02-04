import User from "../models/user.model"
import { errorHandler } from "./errorhandler"
import jwt from "jsonwebtoken"

export const verify=async (req,res,next)=>{
    const token=req.cookies?.access_token

    if(!token){
        next(errorHandler(400,"user not Authorized"))
    }
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET)

    const user=User.findById(decodedToken?.id)

    if (!user){
        return next(errorHandler(400,"Uanauthorised user"))
    }

    req.user=user
    next()
    
}