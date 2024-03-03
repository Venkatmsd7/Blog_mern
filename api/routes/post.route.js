import { create, getPosts } from "../controllers/post.controller.js";
import express from "express";
import { verify } from "../utils/verifyuser.js";
import { upload } from "../utils/multerfile.js";
const router=express();

router.post('/create',verify,upload.single('file'),create)
router.get("/getposts",getPosts)


export default router;