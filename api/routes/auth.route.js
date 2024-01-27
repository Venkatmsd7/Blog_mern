import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router=express.Router()


router.get('/test',(req,res)=>{
    res.json({message:"authroutes"})
})
router.post('/signup',signup)

export default router;