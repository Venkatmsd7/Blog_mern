import Post from "../models/post.model.js";
import uploadCloudinary from "../utils/cloudinary.js";


export const create= async(req,res)=>{
   try {
     const {title,category,content}=req.body;
     const userId=req.user.id;
     const file = req.file;    
    const localFilePath=req.file?.path
    const result= await uploadCloudinary(localFilePath)
    console.log(result);
     const post =await Post.create({
         category,
         content,
         title,
         image:result.url,
         slug:title.trim(" "),
         userId
     })
     console.log(post);
    
 
     res.status(200).json(post)
   } catch (error) {
    console.log(error)
     res.status(500).json({'error':error.message})
   }
}

export const getPosts=async(req,res,next)=>{
  
  try {
    const {userId,page}=req.query
    console.log(userId);
    const posts= await Post.aggregate([
      {
        $match:{
          userId:userId
        }
      },
      {
        $sort:{updatedAt:1}
      },
      {
        $skip:6*(page-1)
      },
      {
        $limit:page*6
      },
      
    ])
  
    return res.status(200).json(posts)
  } catch (error) {
    console.log(error)
  }
}

export const deletePost=async()=>{
  const {postId}=req.query
}

// export const uploadimage=async(req,res)=>{
//     const image=req.file;
//     localFilePath=req.file?.path
//     const res=uploadCloudinary(localFilePath)
//     const post = await Post.findByIdAndUpdate(id,
//         {
//             $set:{
//                 image:res?.url
//             }
//         })
//     res.status(200).json({"message":"image uploaded successfully"})

// }
