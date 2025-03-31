import express from "express";
import User from "../models/user.js";
const router = express.Router();

router.post("/register", async (req, res) => {
    try{
        const {name, email, password} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({success: false, message:"User already exists"})
        }
        
    }catch(error){

    }
});

export default router;