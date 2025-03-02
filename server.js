import express from "express"
import dotenv from "dotenv";
import { PORT } from "./config/config.js";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
// Define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to Module App Backend");
});

app.use("/api/auth", userRoute);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch(err => console.log("server startup failed:" , err));


