import bcrypt from 'bcrypt'

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

        res.status(201).json({ success: true, message: "User signed up successfully", data: newUser });
    }

    catch(error){
        res.status(500).json({ success: false, message: "Error registering user", error: err.message });
    }

};

export async function signIn(req, res){
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const samePass = bcrypt.compare(password, user.password);
        if(!samePass){
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const userRes = user.toObject();
        delete userRes.password;

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: userRes
        });
    }
    catch(error){
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};