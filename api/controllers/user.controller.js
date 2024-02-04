import User from "../models/user.model.js"

export const update=async(req,res,next)=>{
    const {username,email,password,profilePicture}=req.body

    const user=await User.findByIdAndUpdate(
        req.user?.id ,
        {
            $set:{
                username,
                password,
                email,
                profilePicture
            }
        },
        {new:true}
        )
}