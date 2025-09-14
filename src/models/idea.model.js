import mongoose from "mongoose";


const ideaSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [3, "Content must be at least 3 characters"],
        maxlength: [500, "Content must not exceed 500 characters"],
        trim: true,
    },
    reminderMeAt: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["pending", "done"],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'midium'
    },
    tags: [
        {
            type: String,
            trim: true,
        },
    ],
},
    {
        timestamps: true
    }

);



const Idea = mongoose.model('Idea', ideaSchema);

export { Idea };

