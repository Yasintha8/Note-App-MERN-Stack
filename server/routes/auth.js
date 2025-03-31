import express from "express"
import bcrypt from "bcrypt"
import User from "../models/user.js"
import jwt from "jsonwebtoken"


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

        return res.status(200).json({success: true, message:"Account created successfully"})

    }catch(error){
        return res.status(500).json({success: false, message:"Error in Adding User"})
    }
});

router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({success: false, message:"User Not exists"})
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword){
            return res.status(401).json({success: false, message:"Wrong Credentials"})
        }

        const token  = jwt.sign({id: user._id}, "secretkeyofnoteapp123@##@", {expiresIn: "5h"})



        return res
        .status(200)
        .json({success: true,user: {name: user.name}, message:"Login successfully"})

    }catch(error){
        return res
        .status(500)
        .json({success: false, message:"Error in Login Server"})
    }
});

export default router;