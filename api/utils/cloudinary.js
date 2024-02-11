import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


cloudinary.config({ 
  cloud_name: 'drfpoh9qt', 
  api_key: '999796816319584', 
  api_secret: 'oiELQmWzNFl9QR8AQSSjhjUxb1s' 
});


const uploadCloudinary= async (localFilePath)=>{
    try {
       console.log("clonary");
        if (!localFilePath) return null
        const res= await cloudinary.uploader.upload(localFilePath,
          { resource_type: "auto" });
        fs.unlinkSync(localFilePath);
        return res;
    } catch (error) {
        console.log(error);
        fs.unlinkSync(localFilePath)
    }
}

export default uploadCloudinary