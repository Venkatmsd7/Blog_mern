import { update } from "../controllers/user.controller.js"
import  express from "express";
import { verify } from "../utils/verifyuser.js";

const router=express.Router()

router.put('/update',verify,update)

export default router;