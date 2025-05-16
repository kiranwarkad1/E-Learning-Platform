import express from "express";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";

dotenv.config();
connectDB();

const app = express();

// Middleware to parse incoming request bodies
app.use(express.json()); // JSON parser
app.use(express.urlencoded({ extended: true })); // Form data parser

// Middleware to parse cookies
app.use(cookieParser());

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // adjust if frontend runs elsewhere
    credentials: true,
  })
);

// Routes
app.use("/api/v1/user", userRoute);

// Start the server
app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
