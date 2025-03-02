import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        role:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


export const User = mongoose.model('users', usersSchema)