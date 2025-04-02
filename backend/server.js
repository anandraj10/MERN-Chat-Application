// const express = require("express");
// const dotenv=require("dotenv");
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from './socket/socket.js'

// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());//tp parse json data from request body 
app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.send("Hello world!!");
// });



// app.get("/api/auth/signup",(req,res)=>{
//     console.log("signup route");
// });

// app.get("/api/auth/login",(req,res)=>{
//     console.log("login route");
// });

// app.get("/api/auth/logout",(req,res)=>{
//     console.log("logout route");
// });

app.use('/api/auth', authRoutes);//
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, async () => {
    await connectToMongoDB();
    console.log(`server Running on port ${PORT}`)
});