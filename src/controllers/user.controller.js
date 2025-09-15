import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

import User from '../models/user.model.js';


export async function signUp(req,res) {
    
    try{
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const userfound = await User.findOne({email});
        if(userfound){
            return res.status(400).json({ success: false, message: "Email already registered before" });
        }

        const newUser = new User({name, email, password});
        await newUser.save();

        const token = jwt.sign({id : newUser._id}, process.env.JWT_SECRET, {expiresIn : '3d'});

        res.status(201).json({ success: true, message: "User signed up successfully",token, data: newUser });
    }

    catch(error){
        res.status(500).json({ success: false, message: "Error registering user", error: error.message });
    }

};

export async function signIn(req, res){
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const samePass = await bcrypt.compare(password, user.password);
        if(!samePass){
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : '3d'});

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
            user: {
                name: user.name,
                email: user.email
            }
        });
    }
    catch(error){
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};