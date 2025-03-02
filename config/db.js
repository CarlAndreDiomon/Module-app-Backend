import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(mongoDBURL);
        console.log(`App connected to database ${conn.connection.host}`);
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;

