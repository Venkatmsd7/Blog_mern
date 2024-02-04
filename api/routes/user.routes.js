import { update } from "../controllers/user.controller.js"
import  express from "express";

const router=express.Router()

router.put('/update',update)

export default router;