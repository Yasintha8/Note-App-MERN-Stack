import express from "express";
import bcrypt from "bcrypt"
import User from "../models/user.js";


const router = express.Router();

router.post("/register", async (req, res) => {
    try{
        const {name, email, password} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({success: false, message:"User already exists"})
        }
        
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: hashPassword
        })

        await newUser.save()

        res.status(200).json({success: true, message:"Account created successfully"})

    }catch(error){
        res.status(500).json({success: false, message:"Error in Adding User"})
    }
});

export default router;