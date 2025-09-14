
const User = require('../models/user.model.js');


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