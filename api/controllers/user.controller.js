import User from "../models/user.model.js"
import bcrypt from "bcrypt";
export const update=async (req,res,next)=>{
    const {username,email,password}=req.body
    const hashedpassword=bcrypt.hashSync(password,10)
    console.log("update")
    const user=await User.findByIdAndUpdate(
        req.user?.id ,
        {
            $set:{
                username,
                password:hashedpassword,
                email
               
            }
        },
        {new:true}
        )
    res.status(200).json("updated user")   
}