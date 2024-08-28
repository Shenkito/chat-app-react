import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

import { app, server } from './socket/socket.js';
const PORT = process.env.PORT || 3001;

const __dirname = path.resolve();

dotenv.config();

// Allow to get/extract the input fields data (JSON payloads) from the req.body
app.use(express.json());
// Before we use some of the routes , we access the cookies
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})

app.use(cors());

// app.get("/", (req, res) => {
//     // this is my root route http://localhost:3001/
//     res.send("Server is ready to use.")
// });

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}...`);
});